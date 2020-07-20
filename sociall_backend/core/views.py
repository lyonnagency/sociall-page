from django.shortcuts import render
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from core.serializers import UserSerializer, GroupSerializer
from django.conf import settings
from django.http import HttpResponse
from django.core.mail import EmailMessage
class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

from django.core.mail import send_mail
from django.views.decorators.csrf import csrf_exempt
@csrf_exempt
def test(request):
    print(request.POST.get('tel_mail'))

    contact= request.POST.get('tel_mail')
    email = EmailMessage(
        'Se ha solicitado una asesoría desde SociallEvents.com',  # asutno
        'Y ha adjuntado la siguiente información: ' + contact,
        settings.DEFAULT_FROM_EMAIL,  # email  origen,
        [settings.DEFAULT_TO_EMAIL],
        # reply_to=[email]
    )
    email.send()
    return HttpResponse("200")



@csrf_exempt
def celebrate(request):
    eventType = request.POST.get('eventType')
    fecha = request.POST.get('fecha')
    name = request.POST.get('name')
    emailAddress = request.POST.get('email')
    phone = request.POST.get('phone')
    email = EmailMessage(
        'Correo desde la página de sociallevents para realizar un evento',  # asutno
        'Y ha adjuntado la siguiente información: \n Nombre: {} \n Email: {} \n Teléfono: {} \n Tipo de evento: {} \n Fecha: {}'.format(name, emailAddress, phone, eventType, fecha),
        settings.DEFAULT_FROM_EMAIL,  # email  origen,
        [settings.DEFAULT_TO_EMAIL],
        # reply_to=[email]
    )
    email.send()
    return HttpResponse("200")

