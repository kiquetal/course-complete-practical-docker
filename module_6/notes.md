#### Pull image python
    docker pull python

#### Run container
    docker run -it python bash

#### Specify a python file to run

    docker run -it  -v ${PWD}:/home  python  python3 /home/hello_world.py

### Specify a python file to run using -w flag

    docker run -it  -v ${PWD}:/home -w /home python  python3 hello_world.py
