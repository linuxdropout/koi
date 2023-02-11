FROM node:18.12.1-alpine3.17

USER root

RUN apk add --update git openssh-client python3 make gcc g++ libc6-compat gcompat
RUN corepack enable
RUN yarn set version berry

ENV HOME /workspace
WORKDIR $HOME

COPY ./.yarn ./.yarn
COPY ./.pnp.cjs ./.pnp.cjs
COPY ./.pnp.loader.mjs ./.pnp.loader.mjs
COPY ./.yarnrc.yml ./.yarnrc.yml
COPY ./package.json ./package.json
COPY ./tsconfig.json ./tsconfig.json
COPY ./yarn.lock ./yarn.lock

COPY ./services ./services
COPY ./packages ./packages

RUN yarn
