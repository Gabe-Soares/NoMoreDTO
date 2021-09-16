from django.shortcuts import render


def index(request):
    variable = "Hello, world. You're at the generate_DTO index."

    context = {
        'variable': variable,
    }

    return render(request, 'generate_DTO/index.html', context)
