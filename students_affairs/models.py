from django.db import models

# Create your models here.
class Student(models.Model):
    first_name = models.CharField(max_length = 100,null=True,blank=True)
    last_name = models.CharField(max_length = 100,null=True,blank=True)
    email = models.CharField(max_length = 100,null=True,blank=True)
    mobile_number = models.CharField(max_length = 11,null=True,blank=True)
    level = models.CharField(max_length = 1,null=True,blank=True)
    student_id = models.CharField(max_length = 8,null=True,blank=True)
    gpa = models.DecimalField(max_digits=2, decimal_places=1,null=True,blank=True)
    status = models.CharField(max_length = 8,null=True,blank=True)
    department = models.CharField(max_length = 100,null=True,blank=True)
    date = models.DateField(null=True,blank=True)
    gender = models.CharField(max_length = 6,null=True,blank=True)