from django.db import models

# Create your models here.
class Character(models.Model):
  character_name = models.CharField(max_length=255);
  character_class = models.CharField(max_length=255)
  head = models.CharField(max_length=255)
  shoulders = models.CharField(max_length=255)
  chest = models.CharField(max_length=255)
  gloves = models.CharField(max_length=255)
  legs = models.CharField(max_length=255)
  token = models.CharField(max_length=255)
  total_tier = models.IntegerField()