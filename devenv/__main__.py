import sys
import click
from .docker_prod import docker_prod
from .docker_dev import docker_dev
from .django import django
from .postgressql import postgressql

@click.command()
@click.argument('env')
@click.argument('option', required=False)
def main(env, option):
    if env == "dev":
        docker_dev(option)
    elif env == "prod":
        docker_prod(option)
    elif env == "psql":
        postgressql()
    elif env == "django":
        django(option)
    else:
        print("fuck af")

if __name__ == '__main__':
    main()
