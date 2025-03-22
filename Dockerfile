# Use an official image as a base
FROM ubuntu:latest

# Set the working directory
WORKDIR /app

# Copy files into the container
COPY . .

# Set the default command
CMD ["echo", "Hello, Docker!"]