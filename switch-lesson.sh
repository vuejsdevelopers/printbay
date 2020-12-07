#!/bin/bash

set -euo pipefail

if [[ $# -lt 1 ]]; then
    echo "Usage: ${0} [--no-scm|-S] BRANCH"
    return 1
fi

NO_SCM=0
BRANCH=

while [ "$#" -gt 0 ]; do
    case "$1" in
    "-S"|"--no-scm")
        NO_SCM=1
        ;;
    *)
        BRANCH=$@
        break
        ;;
    esac
    shift
done

DOCKER_IMAGE=printbay-dev
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

pushd ${SCRIPT_DIR}
[[ $NO_SCM -eq 0 ]] && git checkout $BRANCH
docker exec ${DOCKER_IMAGE} /bin/bash -c "cd /workdir && npm i && cp .env.server.example .env.server ; npm run seed"
popd
