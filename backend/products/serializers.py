from rest_framework.serializers import ModelSerializer

from products.models import Category, Product


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = ["name", "slug", "description"]


class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = ["name", "slug", "description"]
