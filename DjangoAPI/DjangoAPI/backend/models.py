from django.db import models

# Create your models here.
class Parkinglots(models.Model):
    lot_name = models.CharField(max_length=255)
    spaceID = models.CharField(max_length=255, primary_key=True)
    type = models.CharField(max_length=255)
    availability = models.SmallIntegerField()