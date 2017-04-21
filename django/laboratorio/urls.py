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

from laboratorio.views import ProyectoView
from laboratorio.views.experimento_views import ExperimentoView
from laboratorio.views.protocolo_views import ProtocoloView

urlpatterns = [
    url(r'^proyecto/$', ProyectoView.as_view(), name='proyecto'),
    url(r'^proyecto/(?P<id>\d+)/$', ProyectoView().get_por_id, name='proyecto_id'),

    url(r'^experimento/$', ExperimentoView.as_view(), name='experimento'),
    url(r'^experimento/(?P<id>\d+)/$', ExperimentoView().get_por_id, name='experimento_id'),

    url(r'^protocolo/$', ProtocoloView.as_view(), name='protocolo'),
    url(r'^protocolo/(?P<id>\d+)/$', ProtocoloView().get_por_id, name='protocolo_id'),
]
