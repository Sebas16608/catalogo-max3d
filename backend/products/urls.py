from django.urls import path

from .views import CategoryView, ProductView

urlpatterns = [
    path("category/<int:pk>/", CategoryView.as_view(), name="category-detail"),
    path("category/", CategoryView.as_view(), name="all-categories"),
    path("product/<int:pk>/", ProductView.as_view(), name="product-detail"),
    path("product/", ProductView.as_view(), name="all-products"),
]
