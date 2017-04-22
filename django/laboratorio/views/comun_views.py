# coding=utf-8
import json

from django.http import HttpResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt


def contenido_valido(contenido_json):
    if contenido_json:
        json.loads(contenido_json)
        return contenido_json
    else:
        return "{}"


class CsrfExemptView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super(CsrfExemptView, self).dispatch(request, *args, **kwargs)


class ContenidoJsonBaseView(CsrfExemptView):
    model = None

    def get(self, request, *args, **kwargs):
        contenido_modelo = self.model.objects.values('contenido')
        lista = map(lambda x: json.loads(x["contenido"]), contenido_modelo)
        return HttpResponse(json.dumps(lista), content_type="application/json")

    def post(self, request, *args, **kwargs):
        modelo = self.model(contenido="{}")
        modelo.save()
        mapa_body = json.loads(request.body)
        mapa_body['id'] = modelo.id
        modelo.contenido = json.dumps(mapa_body)
        modelo.save()
        return HttpResponse(modelo.contenido, content_type="application/json")

    def put(self, request, *args, **kwargs):
        mapa_body = json.loads(request.body)
        modelo = self.model.objects.get(pk=mapa_body['id'])
        modelo.contenido = request.body
        modelo.save()
        return HttpResponse(modelo.contenido, content_type="application/json")

    def get_por_id(self, request, id=None):
        modelo = self.model.objects.get(pk=id)
        return HttpResponse(modelo.contenido, content_type="application/json")

    def get_por_nombre(self, request, nombre=None):
        print("Servicio consumido con el parametro: "+nombre)
        contenido_modelo = self.model.objects.filter(contenido__contains=nombre)[:5] .values('contenido')
        lista = map(lambda x: json.loads(x["contenido"]), contenido_modelo)
        return HttpResponse(json.dumps(lista), content_type="application/json")
