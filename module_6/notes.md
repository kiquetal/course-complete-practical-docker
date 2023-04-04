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
