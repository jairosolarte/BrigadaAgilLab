from django.contrib import admin
from django.contrib.auth.models import User, Group

from .models import Experimento, Protocolo
from .models import Perfil, Usuario, Proyecto

admin.site.register(Perfil)
admin.site.register(Usuario)
admin.site.unregister(User)
admin.site.unregister(Group)

admin.site.register(Proyecto)
admin.site.register(Experimento)
admin.site.register(Protocolo)
