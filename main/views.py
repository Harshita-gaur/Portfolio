from django.shortcuts import render, redirect
from .models import Project, ContactMessage, Skill
from .forms import ContactForm

def portfolio(request):
    projects = Project.objects.all()
    skills = Skill.objects.all()  
    form = ContactForm()

    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('portfolio')  

    return render(request, 'main/portfolio.html', {
        'projects': projects,
        'skills': skills,
        'form': form
    })
