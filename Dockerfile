FROM node:14 AS compile-image


WORKDIR /opt/ng
COPY  package.json  ./
RUN npm install

ENV PATH="./node_modules/.bin:$PATH" 

COPY . ./
RUN npm run build -- --prod --aot

FROM nginx

COPY --from=compile-image /opt/ng/dist/ /usr/share/nginx/html