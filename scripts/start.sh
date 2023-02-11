#!/bin/sh

export COMPOSE_DOCKER_CLI_BUILD=1
export DOCKER_BUILDKIT=1

docker-compose up -d postgres
docker-compose up web-app api
