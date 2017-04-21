# coding=utf-8

from laboratorio.models import Protocolo
from laboratorio.views import ContenidoJsonBaseView


class ProtocoloView(ContenidoJsonBaseView):
    def __init__(self):
        self.model = Protocolo
