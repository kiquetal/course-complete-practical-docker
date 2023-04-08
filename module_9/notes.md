### Exploring env variables
    
    docker exec -it container_id env

### Run docker with env variables, give a name to the container

    docker run -it --name my_container -e MY_ENV_VAR=hello_world python bash

### Run phpmyadmin from docker hub

     docker run --name phpmyadmin -it -p 8080:80 phpmyadmin/phpmyadmin
 
