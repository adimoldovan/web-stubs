FROM nginx:alpine

ADD assets /usr/share/nginx/html/assets
COPY index.html /usr/share/nginx/html
ADD stubs /usr/share/nginx/html/stubs

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]