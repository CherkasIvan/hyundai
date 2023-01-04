FROM node:18-alpine as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install --force
COPY ./ /app/
ARG configuration=production
RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
#Copy ci-dashboard-dist
COPY --from=build-stage /app/dist/ngrx-store /usr/share/nginx/html
#Copy default nginx configuration
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
