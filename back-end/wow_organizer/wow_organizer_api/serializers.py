from rest_framework import serializers
from .models import Character

class CharacterSerializer(serializers.Serializer):
  character_name = serializers.CharField(max_length=255);
  character_class = serializers.CharField(max_length=255)
  head = serializers.CharField(max_length=255)
  shoulders = serializers.CharField(max_length=255)
  chest = serializers.CharField(max_length=255)
  gloves = serializers.CharField(max_length=255)
  legs = serializers.CharField(max_length=255)
  token = serializers.CharField(max_length=255)
  total_tier = serializers.IntegerField()
  id = serializers.IntegerField(read_only=True)

  def create(self, validated_data):
    return Character.objects.create(**validated_data)

  def update(self, instance, validated_data):
    instance.character_name = validated_data.get("character_name", instance.character_name)
    instance.character_class = validated_data.get("character_class", instance.character_class)
    instance.head = validated_data.get("head", instance.head)
    instance.shoulders = validated_data.get("shoulders", instance.shoulders)
    instance.chest = validated_data.get("chest", instance.chest)
    instance.gloves = validated_data.get("gloves", instance.gloves)
    instance.legs = validated_data.get("legs", instance.legs)
    instance.token = validated_data.get("token", instance.token)
    instance.total_tier = validated_data.get("total_tier", instance.total_tier)
    instance.id = validated_data.get("id", instance.id)
    instance.save()
    return instance