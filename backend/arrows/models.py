from django.db import models

# Create your models here.


class ArrowModel(models.Model):
    arrow_name = models.CharField(blank=True, null=True, max_length=100)
    arrow_length = models.IntegerField(blank=True, null=True)
    arrow_amount = models.IntegerField(blank=True, null=True)
    wrap = models.BooleanField(default=False)
    wrap_color = models.CharField(blank=True, null=True, max_length=100)
    venis_type = models.CharField(blank=True, null=True, max_length=100)
    venis_length = models.CharField(blank=True, null=True, max_length=100)
    venis_color = models.CharField(blank=True, null=True, max_length=100)
    point_type = models.CharField(blank=True, null=True, max_length=100)
    point_weight = models.CharField(blank=True, null=True, max_length=100)
    insert_type = models.CharField(blank=True, null=True, max_length=100)
    nock_type = models.CharField(blank=True, null=True, max_length=100)
    nock_color = models.CharField(blank=True, null=True, max_length=100)
    nock_insert_type = models.CharField(blank=True, null=True, max_length=100)

    def __str__(self):
        return self.arrow_name
