from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from assistants.models import Assistant
from assistants.serializers import AssistantSerializer
# Create your views here.

@csrf_exempt
def assistant_list(request):
    """
    List all code assistants, or create a new assistant.
    """
    if request.method == 'GET':
        assistants = Assistant.objects.all()
        serializer = AssistantSerializer(assistants, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = AssistantSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def assistant_detail(request, pk):
    """
    Retrieve, update or delete a code assistant.
    """
    try:
        assistant = Assistant.objects.get(pk=pk)
    except Assistant.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = AssistantSerializer(assistant)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = AssistantSerializer(assistant, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        assistant.delete()
        return HttpResponse(status=204)
