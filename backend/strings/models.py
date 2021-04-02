from django.db import models

# Create your models here.


class StringModel(models.Model):
    string_type = models.CharField(blank=True, null=True, max_length=100)
    string_length = models.IntegerField(blank=True, null=True)
    winding_a = models.IntegerField(blank=True, null=True)
    winding_b = models.IntegerField(blank=True, null=True)
    winding_c = models.IntegerField(blank=True, null=True)
    winding_d = models.IntegerField(blank=True, null=True)
    winding_e = models.IntegerField(blank=True, null=True)
    winding_f = models.IntegerField(blank=True, null=True)
    eye_x = models.IntegerField(blank=True, null=True)
    eye_y = models.IntegerField(blank=True, null=True)
    material = models.CharField(blank=True, null=True, max_length=100)
    string_amount = models.IntegerField(blank=True, null=True)
    color = models.CharField(blank=True, null=True, max_length=100)
    twist = models.FloatField(blank=True, null=True)

    def __str__(self):
        return self.string_type
