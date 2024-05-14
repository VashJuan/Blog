#!/bin/bash

# set -x
set -e

if [[ ! -z "$1" ]]; then
    version=$1
else
    read -p "xzy" version
fi

version=v${version}
echo $version

# build your container
SOURCE_IMAGE='eocOnline'
push_tag=registry.docker.com/eoconline/$SOURCE_IMAGE:$version

docker build -t $SOURCE_IMAGE .

docker tag $SOURCE_IMAGE $push_tag

# Push your image to a registry
docker push $push_tag

docker image rm $push_tag