FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package.json ./
RUN npm install --production
COPY . .
RUN npm run build
#RUN mkdir /app
#RUN rm -rf /etc/nginx/conf.d/*

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html


CMD ["nginx", "-g", "daemon off;"]