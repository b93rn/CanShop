# build stage
FROM node:8 as build-stage

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM arm32v7/nginx:stable as production-stage
COPY --from=build-stage /dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]