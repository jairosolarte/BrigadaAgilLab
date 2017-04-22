from rest_framework import serializers

class ProtocoloSerializer(serializers.Serializer):
    nombre = serializers.CharField(max_length=50)
    version = serializers.CharField(max_length=50)
    fecha = serializers.DateField()