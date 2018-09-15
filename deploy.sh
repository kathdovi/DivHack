#!/usr/bin/env bash

if ! [ -x "$(command -v esthree)" ]; then
    sudo curl -o /usr/local/bin/esthree -L "https://github.com/rholder/esthree/releases/download/v0.3.1/esthree" && \
    sudo chmod +x /usr/local/bin/esthree
fi

for f in *.html
do
    esthree put $f s3://organize-web/
done

for f in assets/css/*.css 
do
    esthree put $f s3://organize-web/assets/css/
done

for f in assets/js/*.js
do
    esthree put $f s3://organize-web/assets/js/
done

for f in assets/js/vendor/*.js
do
    esthree put $f s3://organize-web/assets/js/vendor/
done
