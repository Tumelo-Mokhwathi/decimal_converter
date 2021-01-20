# Create node alpine image that will be used for production
FROM node:12

RUN npm install -g http-server
# Make  the app folder the current working directory
WORKDIR /app

# Copy both package.json and package-lock.json
COPY package*.json ./

RUN npm install
# Copy project files and folders to the working directory (app folder)
COPY . .

RUN npm run build

EXPOSE 8080

CMD ["http-server", "dist"]