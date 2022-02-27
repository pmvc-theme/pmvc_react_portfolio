#!/bin/sh

DIR="$( cd "$(dirname "$0")" ; pwd -P )"

production(){
    echo "Production Mode";
    NODE_ENV=production webpack -p 
}

stop(){
    killBy ${DIR}/node_modules/.bin/babel 
    cat webpack.pid | xargs -I{} kill -9 {}
    npm run clean
}

develop(){
    echo "Develop Mode";
    npm run build
}

watch(){
    echo "Watch Mode";
    npm run build:cjs:ui -- --watch &
    npm run build:cjs:src -- --watch &
    npm run build:es:ui -- --watch &
    npm run build:es:src -- --watch &
}

case "$1" in
  watch)
    stop
    watch 
    ;;
  p)
    production
    ;;
  *)
    develop
    exit
esac

exit $?
