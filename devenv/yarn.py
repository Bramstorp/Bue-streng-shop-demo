import subprocess


def yarn(self, action):
    if self == "logs":
        subprocess.run(["sudo", "docker", "logs", "frontend_dev", "--follow"])
    else:
        subprocess.run(
            ["sudo", "docker-compose", "-f", "docker-compose-dev.yml", "exec", "frontend", "yarn", self, action])
