import subprocess


def postgressql():
    subprocess.run(
        ["docker-compose", "-f", "docker-compose-dev.yml", "exec", "db", "psql", "--username=bue_strenge_gemmer", "--dbname=bue_strenge_gemmer_dev"])