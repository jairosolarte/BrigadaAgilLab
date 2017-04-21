# coding=utf-8

from laboratorio.models import Experimento
from laboratorio.views import ContenidoJsonBaseView


class ExperimentoView(ContenidoJsonBaseView):
    def __init__(self):
        self.model = Experimento
