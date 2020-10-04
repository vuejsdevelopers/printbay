#!/bin/bash

set -euo pipefail

DOCKER_IMAGE=printbay-dev
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if ! [[ $(docker images -q ${DOCKER_IMAGE}:latest) ]]; then
    docker build --tag=${DOCKER_IMAGE}:latest ${SCRIPT_DIR}
fi

docker run --rm -it -v ${SCRIPT_DIR}:/workdir --workdir=/workdir --name=${DOCKER_IMAGE} \
    -p 8050:8050 \
    -p 8060:8060 \
    -p 8070:8070 \
    -p 8080:8080 \
    -p 27017:27018 \
    -p 35729:35729 \
    ${DOCKER_IMAGE}
