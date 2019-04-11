```sh
docker build -t web-stubs .
docker run -d -p 4999:80 --name web-stubs web-stubs
```