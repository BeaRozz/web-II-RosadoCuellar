from django.db import models


class User(models.Model):
    name = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    age = models.IntegerField(default=18)
    rfc = models.CharField(max_length=200)
    photo = models.CharField(max_length=200)
    created_date = models.DateTimeField("date published") 
    updated_date = models.DateTimeField("date published")



class User_address(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    street = models.CharField(max_length=200)
    zip_code = models.IntegerField(default=00000)
    city = models.CharField(max_length=200)
    country = models.CharField(max_length=200)
    created_date = models.DateTimeField("date published")
    updated_date = models.DateTimeField("date published")
