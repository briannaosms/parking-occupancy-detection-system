from rest_framework import serializers
from backend.models import Parkinglots

class ParkinglotsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Parkinglots
        fields=('lot_name','spaceID','type','availability')