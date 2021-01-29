# Web-stubs

Collection of web elements used in test automation

## Local

```sh
npm start
```

# Using Docker

### Public image

```sh
docker run -d --name web-stubs -p 9100:80 adimoldovan/web-stubs
```

### Build your own image

```sh
docker build -t web-stubs .
docker run --name web-stubs -p 9100:80 web-stubs
```