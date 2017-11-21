### SETUP NGNIX AND PUT PROD REACTJS FILE INTO HTTP SERVER ###
FROM nginx:1.12.1-alpine
COPY nginx/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY ./build /usr/share/nginx/html
CMD [ "nginx", "-g", "daemon off;"]