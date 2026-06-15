from django.contrib import admin

from .models import ContactMessage


# Register your models here.
@admin.register(ContactMessage)
class MessageAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "phone", "product", "subject")
