#### Running ubuntu container

docker run -it ubuntu bash

#### Running ubuntu container with volume

docker run -it -v /home/username:/home/username ubuntu bash

#### Running ubuntu container with volume and port

docker run -it -v /home/username:/home/username -p 8080:80 ubuntu bash

#### Show containers running

docker ps

#### Show all containers

docker ps -a

#### Stop container

docker stop container_id

#### Remove container

docker rm container_id

#### Remove all containers

docker rm $(docker ps -a -q)

#### Remove all images

docker rmi $(docker images -q)

#### Remove all images and containers

docker rm $(docker ps -a -q) && docker rmi $(docker images -q)

#### Show images

docker images

#### Show images with size

docker images -s

#### Show images with size and tags

docker images -s -a

#### Show images with size and tags and digests

docker images -s -a --digests

#### Show images with size and tags and digests and labels

docker images -s -a --digests --filter "label=foo"

#### Show images with size and tags and digests and labels and filter

docker images -s -a --digests --filter "label=foo" --filter "dangling=true"

#### Show images with size and tags and digests and labels and filter and format

docker images -s -a --digests --filter "label=foo" --filter "dangling=true" --format "table {{.ID}}\t{{.Repository}}\t{{.Tag}}\t{{.Size}}"

#### Remove all images

docker rmi $(docker images -q)

#### Remove all images and containers

docker rm $(docker ps -a -q) && docker rmi $(docker images -q)

