# coding=utf-8
from django.http import HttpResponse

# Create your views here.
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt


class ProyectoView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super(ProyectoView, self).dispatch(request, *args, **kwargs)

    def get(self, request, *args, **kwargs):
        temp = '''[ {"id": 1, "fecha_creacion": "23 Ene 2017", "nombre": "Valoración desinfectantes "},
                    {"id": 2, "fecha_creacion": "22 Ene 2017", "nombre": "Crecimiento de Especies"},
                    {"id": 3, "fecha_creacion": "21 Ene 2017", "nombre": "crecimiento vegetal "},
                    {"id": 4, "fecha_creacion": "20 Ene 2017", "nombre": "Alga invasora "}
                    ]'''
        return HttpResponse(temp, content_type="application/json")

    def post(self, request, *args, **kwargs):
        return HttpResponse("{'value':'post'}", content_type="application/json")
