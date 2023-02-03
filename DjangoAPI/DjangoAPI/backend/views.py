from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from backend.models import Parkinglots
from backend.serializers import ParkinglotsSerializer

# Create your views here.
@csrf_exempt
def parkinglotsAPI(request, lot_name=0):
    if (request.method == 'GET'):
        parking = Parkinglots.objects.filter(availability = 1)
        parking_serializer = ParkinglotsSerializer(parking,many=True)
        return JsonResponse(parking_serializer.data, safe=False)
    elif (request.method == 'POST'):
        parking_data = JSONParser().parse(request)
        parking_serializer = ParkinglotsSerializer(data=parking_data)
        if parking_serializer.is_valid():
            parking_serializer.save()
            return JsonResponse("ADDED SUCCESS",safe=False)
        return JsonResponse("FAILED TO ADD", safe=False)
    elif (request.method == 'PUT'):
        parking_data = JSONParser().parse(request)
        parking = Parkinglots.objects.get(lot_name = parking_data['lot_name'])
        parking_serializer = ParkinglotsSerializer(parking, data=parking_data)
        if parking_serializer.is_valid():
            parking_serializer.save()
            return JsonResponse("UPDATE SUCCESSFUL",safe=False)
        return JsonResponse("FAILED to UPDATE")
    elif (request.method == 'DELETE'):
        parking = Parkinglots.objects.get(lot_name = lot_name)
        parking.delete()
        return JsonResponse("Deleted SUCCESSFULLY",safe=False)
