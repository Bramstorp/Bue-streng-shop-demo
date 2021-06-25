import click
import subprocess


def docker_dev(self):
    if self == "start":
        subprocess.run(
            ["sudo", "docker-compose", "-f", "docker-compose-dev.yml", "up", "-d", "--build"])
    elif self == "down":
        subprocess.run(
            ["sudo", "docker-compose", "-f", "docker-compose-dev.yml", "down", "-v"])
    elif self == "build":
        subprocess.run(
            ["sudo", "docker-compose", "-f", "docker-compose-dev.yml", "build"])
    elif self == "up":
        subprocess.run(
            ["sudo", "docker-compose", "-f", "docker-compose-dev.yml", "up"])
    else:
        click.echo("DET FADME IKKE EN DOCKER COMMAND")
