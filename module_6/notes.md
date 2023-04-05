#### Pull image python
    docker pull python

#### Run container
    docker run -it python bash

#### Specify a python file to run

    docker run -it  -v ${PWD}:/home  python  python3 /home/hello_world.py

### Specify a python file to run using -w flag

    docker run -it  -v ${PWD}:/home -w /home python  python3 hello_world.py

### Name a container and run it

    docker run -it --name my_container python bash

#### Using built-in calendar on python, create a program to receive the year and the month

    import calendar
    year = int(input("Enter year: "))
    month = int(input("Enter month: "))
    print(calendar.month(year, month))

### Run the program

    docker run -it --name my_container -v ${PWD}:/home -w /home python python3 calendar-app.py

### Show full name of stopped container, show name

    docker ps -a --format "table {{.ID}}\t{{.Names}}\t{{.Image}}\t{{.Status}}"


    FROM python:3.8.2-alpine3.11
    RUN apk add --no-cache --update \
        bash \
        curl \
        git \
        openssh-client \
        openssl \
        py-pip \
        python-dev \
        build-base \
        libffi-dev \
        openssl-dev \
        && pip install --upgrade pip \
        && pip install --upgrade setuptools \
        && pip install --upgrade wheel \
        && pip install --upgrade ansible \
        && pip install --upgrade boto \
        && pip install --upgrade boto3 \
        && pip install --upgrade botocore \
        && pip install --upgrade docker \
        && pip install --upgrade docker-compose \
        && pip install --upgrade docker-py \
        && pip install --upgrade dockerpty \
        && pip install --upgrade jmespath \
        && pip install --upgrade paramiko \
        && pip install --upgrade pycrypto \
        && pip install --upgrade pywinrm \
        && pip install --upgrade requests \
        && pip install --upgrade

#### Build image using a script in node located in node/hello.js using volume mount, 
#### specify a namefor the container

    docker run -it --name nodejs_container -v ${PWD}:/app -w /app node node hello.js

#### Build nodejs app using express and some third-party library specified in package.json

    docker run  -it --name nodejs_container -v ${PWD}:/app -w /app  node  npm init

    docker run -it --name nodejs_container -v ${PWD}:/app -w /app  node  node index.js

### Add handling SIGINT AND SIGTERM signals

    docker run -it --name nodejs_container -v ${PWD}:/app -w /app  node  node index.js

