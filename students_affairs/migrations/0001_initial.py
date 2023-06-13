# Generated by Django 4.1.6 on 2023-06-13 04:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(blank=True, max_length=100, null=True)),
                ('last_name', models.CharField(blank=True, max_length=100, null=True)),
                ('email', models.CharField(blank=True, max_length=100, null=True)),
                ('mobile_number', models.CharField(blank=True, max_length=11, null=True)),
                ('level', models.CharField(blank=True, max_length=1, null=True)),
                ('student_id', models.CharField(blank=True, max_length=8, null=True)),
                ('gpa', models.DecimalField(blank=True, decimal_places=1, max_digits=2, null=True)),
                ('status', models.CharField(blank=True, max_length=8, null=True)),
                ('department', models.CharField(blank=True, max_length=100, null=True)),
                ('date', models.DateField(blank=True, null=True)),
                ('gender', models.CharField(blank=True, max_length=6, null=True)),
            ],
        ),
    ]