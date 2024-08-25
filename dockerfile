# Use an appropriate base image
FROM node:18

# Set the working directory
WORKDIR /opt/build

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Update npm to the latest version
RUN npm install -g npm@10.8.2

# Install dependencies with --legacy-peer-deps
RUN npm i --legacy-peer-deps

# Copy the rest of your application code
COPY . .

# Build your application (if necessary)
# RUN npm run build

# Expose the port your application runs on (if necessary)
# EXPOSE 3000

# Start your application
# CMD ["npm", "start"]
