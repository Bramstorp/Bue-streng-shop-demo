import subprocess


def django(self):
    subprocess.run(
        ["docker-compose", "-f", "docker-compose-dev.yml", "exec", "backend", "python", "manage.py", self])
