# Use a lightweight Node image
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Default command for development
CMD ["npm", "run", "dev"]