from django.contrib import admin

# Register your models here.

from .models import Perfil,Usuario
from django.contrib.auth.models import User,Group

admin.site.register(Perfil)
admin.site.register(Usuario)
admin.site.unregister(User)
admin.site.unregister(Group)