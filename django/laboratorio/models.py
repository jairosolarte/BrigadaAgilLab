from __future__ import unicode_literals

from django.contrib.auth.models import Group, User
from django.db import models


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


class Insumo(models.Model):
    nombre = models.CharField(max_length=50)
    Unidad_Medida = (
        ("mg", "Miligramo"),
        ("gr", "Gramo"),
        ("Kg", "Kilogramo"),
        ("ml", "Mililitro"),
        ("Lt", "Litro"),
    )
    unidad = models.CharField(max_length=2, choices=Unidad_Medida)

    def __unicode__(self):
        return self.nombre


class Contenedor(models.Model):
    name = models.CharField(max_length=50)

    def __unicode__(self):
        return self.nombre


class Inventario(models.Model):
    insumo = models.ForeignKey(Insumo)
    contenedor = models.ForeignKey(Contenedor)
    cantidad = models.DecimalField(max_digits=10, decimal_places=4, default=0)


class Proveedor(models.Model):
    name = models.CharField(max_length=50)
    nit = models.DecimalField(max_digits=10, decimal_places=0, default=0)

    def __unicode__(self):
        return self.nombre


class Pedido(models.Model):
    fecha = models.DateField()
    # Choices
    estado_type = (
        ("G", "Generada"),
        ("P", "Proceso"),
        ("T", "Terminada"),
        ("C", "Cancelada")
    )
    estado = models.CharField(max_length=1, choices=estado_type)
    cantidad = models.DecimalField(max_digits=10, decimal_places=4, default=0)
    insumo = models.ForeignKey(Insumo)


# ---- Modelos basados en JSON

class Proyecto(models.Model):
    contenido = models.TextField()


class Experimento(models.Model):
    contenido = models.TextField()


class Protocolo(models.Model):
    contenido = models.TextField()
