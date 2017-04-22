"""proyecto_laboratorio URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url

from .views import ProyectoExperimentoView, ExperimentoProtocolo, ExperimentoView, ProtocoloView, \
    ProyectoView

urlpatterns = [
    url(r'^proyecto/$', ProyectoView.as_view(), name='proyecto'),
    url(r'^proyecto/(?P<id>\d+)/$', ProyectoView().get_por_id, name='proyecto_id'),
    # Proyecto - Experimento
    url(r'^proyecto/(?P<id_proyecto>\d+)/experimento/$', ProyectoExperimentoView.as_view(),
        name='proyecto_experimento_todos'),
    url(r'^proyecto/(?P<id_proyecto>\d+)/experimento/(?P<id_experimento>\d*)/$', ProyectoExperimentoView.as_view(),
        name='proyecto_experimento'),

    url(r'^experimento/$', ExperimentoView.as_view(), name='experimento'),
    url(r'^experimento/(?P<id>\d+)/$', ExperimentoView().get_por_id, name='experimento_id'),



    # Experimento - protocolo
    # url(r'^experimento/(?P<id_experimento>\d+)/protocolo/$', ExperimentoProtocolo.as_view(),
    #     name='experimento_protocolo_todos'),
    # url(r'^experimento/(?P<id_experimento>\d+)/protocolo/(?P<id_protocolo>\d*)$', ExperimentoProtocolo.as_view(),
    #     name='experimento_protocolo'),

    url(r'^protocolo/$', ProtocoloView.as_view(), name='protocolo'),
    url(r'^protocolo/(?P<id>\d+)/$', ProtocoloView().get_por_id, name='protocolo_id'),
    url(r'^protocolo/filtro/(?P<nombre>.+)/$', ProtocoloView().get_por_nombre, name='protocolo_nombre'),
]
