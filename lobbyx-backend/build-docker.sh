mvn clean package

export DB_HOST=212.227.11.173
export DB_NAME=lobbyx
export DB_PASSWORD=Snack123@
export DB_USERNAME=sim

docker build --build-arg DB_HOST --build-arg DB_NAME --build-arg DB_PASSWORD --build-arg DB_USERNAME -t lobbyx .