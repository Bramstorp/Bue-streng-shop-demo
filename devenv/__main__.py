import click
from .docker_prod import docker_prod
from .docker_dev import docker_dev
from .django import django
from .docker_container import docker_container
from .postgressql import postgressql


@click.command()
@click.argument('env')
@click.argument('option', required=False)
@click.argument('action', required=False)
def main(env, option, action):
    if env == "dev":
        docker_dev(option)
    elif env == "prod":
        docker_prod(option)
    elif env == "psql":
        postgressql()
    elif env == "django":
        django(option)
    elif env == "docker":
        docker_container(option, action)
    else:
        print("fuck af")


if __name__ == '__main__':
    main()
