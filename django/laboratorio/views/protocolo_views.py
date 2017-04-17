from django.core import serializers
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

from laboratorio.models import Protocolo


@csrf_exempt
def listar_protocolos(request, protocolos=None):
    protocolos = Protocolo.objects.all()
    return HttpResponse(serializers.serialize("json", protocolos))
