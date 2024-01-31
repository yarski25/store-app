# Pull the Node image from Docker Hub
FROM node:alpine

# Setting Working Directory
WORKDIR /usr/client

# Copying only package.json
COPY package*.json ./

# Install Dependencies
RUN npm install

# Copy rest of the code to container
COPY . .

EXPOSE 5173

# Run the server on Nodemon
CMD ["npm", "run", "dev"]