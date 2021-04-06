import subprocess


def docker_dev(self):
    if self == "start":
        subprocess.run(
            ["docker-compose", "-f", "docker-compose-dev.yml", "up", "-d", "--build"])
    elif self == "stop":
        subprocess.run(
            ["docker-compose", "-f", "docker-compose-dev.yml", "down", "-v"])
    else:
        print("NEJ NIKO DET IKKE EN KOMMAND")


def docker_prod(self):
    if self == "start":
        subprocess.run(
            ["docker-compose", "-f", "docker-compose-prod.yml", "up", "-d", "--build"])
    elif self == "stop":
        subprocess.run(
            ["docker-compose", "-f", "docker-compose-prod.yml", "down", "-v"])
    else:
        print("NEJ NIKO DET IKKE EN KOMMAND")


def docker(env, action):
    if env == "dev":
        docker_dev(action)
    if env == "prod":
        docker_prod(action)
