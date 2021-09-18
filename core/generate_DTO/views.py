from django.shortcuts import render, redirect


def index(request):
    return render(request, 'generate_DTO/index.html')


def javaDTO(request):
    return render(request, 'generate_DTO/javaDTO.html')


def generate(request):
    if request.method == "POST":
        dto = request.POST['json']

        context = {
            'dto': dto,
        }

        return render(request, 'generate_DTO/result.html', context)
    else:
        return redirect('')
