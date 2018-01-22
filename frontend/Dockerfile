FROM node:7.10 as build-deps

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn


COPY . ./
RUN yarn build

FROM nginx
COPY --from=build-deps /usr/src/assets/bundles /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
