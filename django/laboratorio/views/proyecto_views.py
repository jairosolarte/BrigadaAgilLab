# coding=utf-8

from laboratorio.models import Proyecto
from laboratorio.views import ContenidoJsonBaseView


class ProyectoView(ContenidoJsonBaseView):
    def __init__(self):
        self.model = Proyecto
