# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-04-19 23:44
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('laboratorio', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contenedor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Insumo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('unidad', models.CharField(choices=[('mg', 'Miligramo'), ('gr', 'Gramo'), ('Kg', 'Kilogramo'), ('ml', 'Mililitro'), ('Lt', 'Litro')], max_length=2)),
            ],
        ),
        migrations.CreateModel(
            name='Inventario',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cantidad', models.DecimalField(decimal_places=4, default=0, max_digits=10)),
                ('contenedor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='laboratorio.Contenedor')),
                ('insumo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='laboratorio.Insumo')),
            ],
        ),
        migrations.CreateModel(
            name='Pedido',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateField()),
                ('estado', models.CharField(choices=[('G', 'Generada'), ('P', 'Proceso'), ('T', 'Terminada'), ('C', 'Cancelada')], max_length=1)),
                ('cantidad', models.DecimalField(decimal_places=4, default=0, max_digits=10)),
                ('insumo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='laboratorio.Insumo')),
            ],
        ),
        migrations.CreateModel(
            name='Protocolo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('version', models.CharField(max_length=50)),
                ('fecha', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Proveedor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('nit', models.DecimalField(decimal_places=0, default=0, max_digits=10)),
            ],
        ),
    ]
