import subprocess
import click


def django(self):
    if self == "logs":
        subprocess.run(["sudo", "docker", "logs", "backend_dev", "--follow"])
    elif self == "restart":
        subprocess.run(["sudo", "docker", "restart", "backend_dev"])
    elif self:
        subprocess.run(
            ["sudo", "docker-compose", "-f", "docker-compose-dev.yml", "exec", "backend", "python", "manage.py", self])
    else:
        click.echo("DET IKKE EN DJANGO COMMANDO")