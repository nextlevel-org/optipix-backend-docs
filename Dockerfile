FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Build documentation
RUN npm run build-docs

# Expose port for the npm serve command
EXPOSE 8080

# Start the server
CMD ["npm", "run", "serve-docs"] 