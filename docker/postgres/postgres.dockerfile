FROM postgres:13.4-alpine

ENV PG_CRON_VERSION 1.3.0

RUN apk add --no-cache --virtual .build-deps build-base ca-certificates clang-dev llvm openssl tar \
    && wget -O /pg_cron.tgz https://github.com/citusdata/pg_cron/archive/v$PG_CRON_VERSION.tar.gz \
    && tar xvzf /pg_cron.tgz && cd pg_cron-$PG_CRON_VERSION \
    && sed -i.bak -e 's/-Werror//g' Makefile \
    && sed -i.bak -e 's/-Wno-implicit-fallthrough//g' Makefile \
    && make && make install \
    && cd .. && rm -rf pg_cron.tgz && rm -rf pg_cron-* \
    && apk del .build-deps

CMD ["-c", "shared_preload_libraries=pg_cron", "-c", "cron.database_name=postgres"]
