# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire Next.js project to the container's working directory
COPY . .

# Build the Next.js project
RUN npm run build

# Expose the port that Next.js is listening on
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
