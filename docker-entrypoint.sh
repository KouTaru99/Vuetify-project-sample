#!/bin/sh

# Thay thế API_URL từ biến môi trường vào config.js
if [ ! -z "$API_URL" ]; then
  sed -i "s|API_URL: '.*'|API_URL: '$API_URL'|g" /usr/share/nginx/html/config.js
  echo "Set API_URL to $API_URL"
fi

# Tiếp tục thực thi command được truyền vào
exec "$@" 