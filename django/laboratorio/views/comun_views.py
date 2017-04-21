# coding=utf-8
import json

from django.http import HttpResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt


class ContenidoJsonBaseView(View):
    def __init__(self, model):
        View.__init__(self)
        self.model = model

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super(ContenidoJsonBaseView, self).dispatch(request, *args, **kwargs)

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
