# coding=utf-8

from ..models import Proyecto
from ..views import ContenidoJsonBaseView


class ProyectoView(ContenidoJsonBaseView):
    def __init__(self):
        self.model = Proyecto
