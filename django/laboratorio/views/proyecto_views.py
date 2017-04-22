# coding=utf-8
import json

from django.http import HttpResponse
from django.http import HttpResponseServerError

from ..models import Proyecto, Experimento, ProyectoExperimento
from ..views import ContenidoJsonBaseView, CsrfExemptView, contenido_valido


class ProyectoView(ContenidoJsonBaseView):
    def __init__(self):
        self.model = Proyecto


class ProyectoExperimentoView(CsrfExemptView):
    def get(self, request, id_proyecto=None, *args, **kwargs):
        contenido_modelo = ProyectoExperimento.objects.filter(proyecto__id=id_proyecto).values("experimento__contenido",
                                                                                               "contenido")
        lista = map(
            lambda elem:
            {'experimento': json.loads(elem["experimento__contenido"]), 'progreso': json.loads(elem["contenido"])},
            contenido_modelo)
        return HttpResponse(json.dumps(lista), content_type="application/json")

    def post(self, request, id_proyecto=None, id_experimento=None, *args, **kwargs):
        if id_proyecto is None or id_experimento is None:
            return HttpResponseServerError('<h1>Server Error (500)</h1>')

        modelo = ProyectoExperimento(proyecto=Proyecto.objects.get(pk=id_proyecto),
                                     experimento=Experimento.objects.get(pk=id_experimento),
                                     contenido="{}")
        modelo.save()
        modelo.contenido = contenido_valido(request.body);
        modelo.save()
        return HttpResponse(request.body, content_type="application/json")

    def put(self, request, id_proyecto=None, id_experimento=None, *args, **kwargs):
        if id_proyecto is None or id_experimento is None:
            return HttpResponseServerError('<h1>Server Error (500)</h1>')
        modelo = ProyectoExperimento.objects.get(proyecto__id=id_proyecto, experimento__id=id_experimento)
        modelo.contenido = contenido_valido(request.body)
        modelo.save()
        return HttpResponse(request.body, content_type="application/json")
