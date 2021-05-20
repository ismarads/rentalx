FROM node

WORKDIR /usr/app

COPY package.json ./

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get update && apt-get install -y nodejs

COPY . .

EXPOSE 5000

CMD ["npm","run","dev"]