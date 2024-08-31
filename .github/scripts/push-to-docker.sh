if [ -z "$TAG" ]; then
  echo "::error:: TAG not provided"
  exit 1
fi

docker build -t adimoldovan/web-stubs:"$TAG" .
docker push adimoldovan/web-stubs:"$TAG"

docker build -t adimoldovan/web-stubs:latest .
docker push adimoldovan/web-stubs:latest
