
from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    techstack=models.TextField(default="Not specified")
    description = models.TextField()
    link = models.URLField(blank=True, null=True)  

    def __str__(self):
        return self.title

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name}"


class Skill(models.Model):
    PROFICIENCY_LEVELS = [
        (1, "Beginner"),
        (2, "Intermediate"),
        (3, "Expert"),
    ]

    name = models.CharField(max_length=100)
    proficiency = models.IntegerField(default=50)  
    level = models.IntegerField(choices=PROFICIENCY_LEVELS, default=1)  

    def __str__(self):
        return f"{self.name} - {self.get_level_display()}"