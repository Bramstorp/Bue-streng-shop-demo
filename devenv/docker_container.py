import click
import subprocess

def docker_container(self, action):
    if self == "frontend":
        subprocess.run(["sudo", "docker", "{action}", "frontend_dev"])
    if self == "backend":
        subprocess.run(["sudo", "docker", "{action}", "backend_dev"])
    if self == "db":
        subprocess.run(["sudo", "docker", "{action}", "frontend_dev"])
    else:
        click.echo("DET FADME IKKE EN DOCKER CONTAINER")

