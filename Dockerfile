FROM node as docker-test
WORKDIR /myapp
COPY ./ /myapp/
RUN npm install 
RUN npm run build

FROM nginx as nginx-test
COPY --from=docker-test /myapp/dist/ /usr/share/nginx/dist/
COPY ./test-nginx.conf /etc/nginx/conf.d/
