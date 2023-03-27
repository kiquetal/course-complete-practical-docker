#### Running ubuntu container

docker run -it ubuntu bash

#### Running ubuntu container with volume

docker run -it -v /home/username:/home/username ubuntu bash

#### Running ubuntu container with volume and port

docker run -it -v /home/username:/home/username -p 8080:80 ubuntu bash

