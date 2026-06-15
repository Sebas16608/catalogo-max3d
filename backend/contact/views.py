from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import ContactMessage
from .serializers import MessageSerializer


class MessageView(APIView):
    def get(self, request, pk=None):
        if pk is not None:
            try:
                message = ContactMessage.objects.get(pk=pk)
                serializer = MessageSerializer(message)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except ContactMessage.DoesNotExist:
                return Response(
                    {"error": "not found"}, status=status.HTTP_404_NOT_FOUND
                )
        else:
            message = ContactMessage.objects.all()
            serializer = MessageSerializer(message, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
