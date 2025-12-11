# Base image resmi Node.js
FROM node:18-alpine

# Set working directory di dalam container
WORKDIR /app

# Copy package files terlebih dahulu
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy semua file ke container
COPY . .

# Expose port aplikasi
EXPOSE 3000

# Command untuk menjalankan aplikasi
CMD ["node", "app.js"]
