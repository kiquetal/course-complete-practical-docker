#### Notes

    You cannot communicate between container using  hostname
    unless you create a network and connect the containers to it.

    You can use the --network flag to connect containers to a network.

### Example creating custom network on docker

    docker network create my_network

### Notes

    Using custom network you can communicate between containers using
    the container name.

### Use case

    docker network mysql

    docker run -it -e MYSQL_ROOT_PASSWORD=123456 --network mysql --name mysql mysql

    docker run -it --network mysql -e PMA_HOST=mysql --name phpmyadmin phpmyadmin/phpmyadmin

    docker run -it --network mysql -e MYSQL_HOST=mysql --name wordpress wordpress


