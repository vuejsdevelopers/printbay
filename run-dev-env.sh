#!/bin/bash

set -euo pipefail

function usage {
    echo "Usage: $0 [OPTIONS] [IMAGE_NAME]"
    echo ""
    echo "Options"
    echo " -h, --help         Display this message"
    echo " -c, --cached       Mount volume with 'cached' option"
    echo " -d, --delegated    Mount volume with 'delegated' option"
}

MOUNT_OPT=
DOCKER_IMAGE=printbay-dev
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

while [ "$#" -gt 0 ]; do
    case "$1" in
    "-h"|"--help")
        usage
        exit 0
        ;;
    "-c"|"--cached")
        MOUNT_OPT=:cached
        ;;
    "-d"|"--delegated")
        MOUNT_OPT=:delegated
        ;;
    *)
        DOCKER_IMAGE=$@
        break
        ;;
    esac
    shift
done

if ! [[ $(docker images -q ${DOCKER_IMAGE}:latest) ]]; then
    docker build --tag=${DOCKER_IMAGE}:latest ${ROOT_DIR}
fi

if [[ $(docker container ls -q -f name=${DOCKER_IMAGE}) ]]; then
    docker exec -it ${DOCKER_IMAGE} bash
else
    docker run --rm -it -v ${ROOT_DIR}:/workdir${MOUNT_OPT} --workdir=/workdir --name=${DOCKER_IMAGE} \
        -p 8050:8050 \
        -p 8060:8060 \
        -p 8070:8070 \
        -p 8080:8080 \
        -p 27017:27018 \
        -p 35729:35729 \
        ${DOCKER_IMAGE}
fi
