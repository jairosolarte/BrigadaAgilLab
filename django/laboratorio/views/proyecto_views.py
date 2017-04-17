from django.http import HttpResponse

# Create your views here.
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt


class ProyectoView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super(ProyectoView, self).dispatch(request, *args, **kwargs)

    def get(self, request, *args, **kwargs):
        return HttpResponse("{'value':'get'}", content_type="application/json")

    def post(self, request, *args, **kwargs):
        return HttpResponse("{'value':'post'}", content_type="application/json")
