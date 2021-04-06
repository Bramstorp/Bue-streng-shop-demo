import sys
from .docker import docker


def main():
    input_path = sys.argv[1]
    if input_path == "docker":
        env = sys.argv[2]
        if env == "dev":
            docker(env, sys.argv[3])
        elif env == "prod":
            docker(env, sys.argv[3])
        else:
            print("pls use dev or prod for env")
    else:
        print("fejl 40 dummert")

if __name__ == '__main__':
    main()
