# Generated by Django 4.1.4 on 2023-04-17 17:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_alter_order_paidat'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='paidAt',
            field=models.DateField(),
        ),
    ]
