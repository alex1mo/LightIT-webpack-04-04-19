# WEBPACK 04-04-19

npm install

## Webpack

<b>npm run build</b> // собрать проект

## Nginx

установить <a>https://nginx.org/ru/linux_packages.html#Ubuntu</a>

<b>sudo nginx<b/> //запустить nginx

<b>npm run test-nginx</b> //собрать проект и добавить в nginx

<b>npm run delete-nginx</b> //удалить файлы из nginx

## Docker

устанвоить <a>https://docs.docker.com/install/linux/docker-ce/ubuntu/</a>

<b>npm run test-docker</b> //создать образ с именем "docker-test" из конфигурационного файла "Dockerfile"

<b>docker image list</b> //просмотреть все образы

<b>docker run -d -p 8080:8080 --name myapp docker:test</b> //создать контейнер с именем "myapp" из образа "docker:test". запустить в фоновом режиме и прослушивать виртуальный порт 8080 на лакальном порте 8080

<b>docker ps -a</b> // просмореть все контейнеры

<b>docker rm [имя]</b> //удалить контейре

<b>docker rmi [имя]</b> //удалить образ

## Docker-conpose

установить <a>https://docs.docker.com/compose/install/</a>
