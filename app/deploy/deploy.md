# Deployment

```sh
ssh root@82.112.231.160 # login to server
```

## Make directory 

```sh
mkdir /home/ubuntu/app;
mkdir /home/ubuntu/app/api-url-short;
mkdir /home/ubuntu/app/api-url-short/fastapi;
```

## Download app

```sh
cd /home/ubuntu/app/api-url-short/fastapi; 
cd ..; # if needed
git clone <repo> fastapi
cd fastapi/
git fetch --all
git pull origin fastapi
```

## Test App

```sh
python3 -m venv venv
python3 -m venv venv
source venv/bin/active
pip install -r requirements.txt
uvicorn main:app --reload
```

## Register a service for port port 8000 with uvicorn

```sh
sudo nano /etc/systemd/system/api-url-short.service
```

Copy `ini` setting from the `api-url-short.service.ini` file

```sh
sudo systemctl start api-url-short
sudo service nginx reload
```

## Setup NGINX

```sh
sudo nano /etc/nginx/sites-available/api.1xshort.com.conf
```

Copy conf from `api.1xshort.com.conf` file.

```sh
ll /etc/nginx/sites-available/ # check

sudo ln -s /etc/nginx/sites-available/api.1xshort.com.conf /etc/nginx/sites-enabled/

ll /etc/nginx/sites-enabled/ # check
```

```sh
sudo nginx -t
sudo service nginx reload
sudo service nginx restart
```