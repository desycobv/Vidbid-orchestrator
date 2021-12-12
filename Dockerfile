FROM node:16.6.2-slim
USER node
ENV PORT 8080
EXPOSE 8080
WORKDIR /usr/src/app
COPY . .
CMD ["npm","run", "deploy"]

