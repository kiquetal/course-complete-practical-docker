### Additional Containers

#### Download elasticsearch

    docker pull elasticsearch

#### Run elasticsearch

    docker run -it -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:7.5.2

#### Execute some command on elasticsearch


    Create index

        curl -X PUT "http://elasticsearch_locally:9200/my-index"

    Obtain index

        curl -X GET "http://elasticsearch_locally:9200/_cat/indices?v"

    INSERT Documents into the INDEX
    
    curl -X POST http://elasticsearch_locally:9200/my-index/cities/1 \
    -d '{"city":"New York"}' \
    -H 'Content-Type: application/json'


    curl -X POST http://elasticsearch_locally:9200/my-index/cities/2 \
    -d '{"city":"London"}' \
    -H 'Content-Type: application/json'

    curl -X POST http://elasticsearch_locally:9200/my-index/cities/3 \
    -d '{"city":"Paris"}' \
    -H 'Content-Type: application/json'

    READ MAPPING FROM INDEX

    curl -X GET http://elasticsearch_locally:9200/my-index/_mapping

    SEARCH BY ID

    curl -X GET http://elasticsearch_locally:9200/my-index/cities/1
    
    SEARCH BY QUERY

    curl -X GET http://elasticsearch_locally:9200/my-index/_search?q=city:London


