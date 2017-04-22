# coding=utf-8

from ..models import Protocolo
from ..views import ContenidoJsonBaseView


class ProtocoloView(ContenidoJsonBaseView):
    def __init__(self):
        self.model = Protocolo
