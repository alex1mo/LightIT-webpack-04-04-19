# WEBPACK 04-04-19

npm install

## Webpack

npm run build // собрать проект

## Nginx

установить https://nginx.org/ru/linux_packages.html#Ubuntu

npm run test-nginx //собрать проект и добавить в nginx
npm run delete-nginx //удалить файлы из nginx

## Docker

устанвоить https://docs.docker.com/install/linux/docker-ce/ubuntu/

npm run test-docker //создать образ с именем "docker-test" из конфигурационного файла "Dockerfile"
docker image list //просмотреть все образы \n
docker run -d -p 8080:8080 --name myapp docker:test //создать контейнер с именем "myapp" из образа "docker:test". запустить в фоновом режиме и прослушивать виртуальный порт 8080 на лакальном порте 8080 \n
docker ps -a // просмореть все контейнеры
docker rm [имя] //удалить контейре
docker rmi [имя] //удалить образ

## Docker-conpose

установить https://docs.docker.com/compose/install/
