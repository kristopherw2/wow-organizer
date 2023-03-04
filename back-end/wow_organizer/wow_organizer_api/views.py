from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .serializers import CharacterSerializer
from .models import Character
# Create your views here.
class CharactersView(APIView):
  def get(self, request, pk=None):
    if pk: 
      data = Character.objects.get(pk=pk)
      serializer=CharacterSerializer(data)
    else:
      data = Character.objects.all()
      serializer = CharacterSerializer(data, many=True)
    return Response({"result": serializer.data})

  def post(self, request):
    character = request.data
    serializer = CharacterSerializer(data=character)
    if serializer.is_valid(raise_exception=True):
      character_saved=serializer.save()
      return Response({"result": f"Character {character_saved.character_name}"})

  def put(self, request, pk):
    saved_character = get_object_or_404(Character.objects.all(), pk=pk)
    data = request.data
    serializer = CharacterSerializer(instance=saved_character, data=data, partial=True)
    if serializer.is_valid(raise_exception=True):
      saved_character = serializer.save()
    return Response({"result": f"{saved_character.character_name} updated"})

  def delete(self, request, pk):
    character = get_object_or_404(Character.objects.all(), pk=pk)
    character.delete()
    return Response({"result": f"Character id {pk} deleted"}, status=204)