from django.contrib import admin

from products.models import Category, Product


# Register your models here.
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "slug", "description")


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "slug",
        "description",
        "price",
        "category",
        "is_available",
        "author",
    )
