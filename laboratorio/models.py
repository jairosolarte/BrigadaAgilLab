from __future__ import unicode_literals
from django.db import models
from django.contrib.auth.models import Group, User


class Perfil(Group):
    descripcion = models.TextField(blank=True)
    objects = models.Manager()

    class Meta:
        verbose_name_plural = "Perfiles"
        ordering = ['name']

    def __unicode__(self):
        return u'%s' % (self.name)


class Usuario(models.Model):
    nombre = models.CharField(max_length=50)
    perfil = models.OneToOneField(Perfil, on_delete=models.CASCADE)

    def __unicode__(self):
        return u'%s' % (self.nombre)