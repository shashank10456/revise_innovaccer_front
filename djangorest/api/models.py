from __future__ import unicode_literals
from django.db import models
# Create your models here.


class UserInfo(models.Model):
    data = models.TextField(max_length=30, default='0000000', editable=False)
    description=models.TextField(max_length=50, default='0000000', editable=False)
