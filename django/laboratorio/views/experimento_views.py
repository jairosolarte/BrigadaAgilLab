# coding=utf-8
from django.views import View
from ..models import Experimento
from ..views import ContenidoJsonBaseView


class ExperimentoView(ContenidoJsonBaseView):
    def __init__(self):
        self.model = Experimento


class ExperimentoProtocolo(View):
    pass