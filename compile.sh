#!/bin/sh

DIR="$( cd "$(dirname "$0")" ; pwd -P )"


killBy(){
    ps -eo pid,args | grep $1 | grep -v grep | awk '{print $1}' | xargs -I{} kill -9 {}
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
  stop)
    stop
    ;;
  watch)
    stop
    watch 
    ;;
  *)
    develop
    exit
esac

exit $?
