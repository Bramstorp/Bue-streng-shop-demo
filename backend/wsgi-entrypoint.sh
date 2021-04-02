#!/bin/sh

if [ "$DATABASE" = "postgres" ]
then
    echo "Waiting for postgres..."

    while ! nc -z $SQL_HOST $SQL_PORT; do
        sleep 0.1
    done

    echo "PostgreSQL started"
fi

python3 manage.py flush --no-input
python3 manage.py migrate
python3 manage.py collectstatic --noinput

exec "$@"

gunicorn backend.wsgi --bind 0.0.0.0:8000 --workers 4 --threads 4