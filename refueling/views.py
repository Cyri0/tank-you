from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Refuel
from .serializers import RefuelSerializer

from django.contrib.auth.models import AnonymousUser

@api_view(['GET'])
def getRefuels(request):
    if not isinstance(request.user, AnonymousUser):
        refuels = Refuel.objects.filter(user = request.user)
        serialized = RefuelSerializer(refuels, many=True)
        return Response(serialized.data)
    return Response({'message':'User is undefined.'})