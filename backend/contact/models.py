from django.db import models
from products.models import Product


# Create your models here.
class ContactMessage(models.Model):
    name = models.CharField(max_length=160)
    email = models.EmailField()
    phone = models.CharField(blank=True, null=True)
    subject = models.CharField(max_length=200)
    message = models.TextField()
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="message"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    class Meta:
        ordering = ["id"]
        verbose_name = "Message"
        verbose_name_plural = "Messages"

    def __str__(self) -> str:
        return f"Message by {self.name} number {self.phone} email {self.email}"
