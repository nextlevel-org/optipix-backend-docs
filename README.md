# Optipix Backend Documentation

This repository contains the OpenAPI (Swagger) documentation for the Optipix Backend API. The documentation is organized in a modular way using OpenAPI 3.0.0 specification and is configured to work with Postman.

## Project Structure

```
.
├── index.yaml              # Main OpenAPI specification file
├── v1/                     # Version 1 API endpoints
│   ├── auth.yaml          # Authentication endpoints
│   ├── client.yaml        # Client management endpoints
│   ├── customerSettings.yaml # Customer settings endpoints
│   ├── vehicle.yaml       # Vehicle management endpoints
│   ├── common/            # Common components
│   │   └── responses.yaml # Common response definitions
│   └── schemas/           # Schema definitions for v1
├── v2/                     # Version 2 API endpoints
│   ├── customer.yaml      # Customer management endpoints (v2)
│   └── schemas/           # Schema definitions for v2
└── .postman/              # Postman configuration files
```

## API Overview

The API is organized into two main versions (v1 and v2) and includes the following main features:

### Version 1 (v1)
- Authentication (`/login`, `/users/{userId}/login`)
- Client Management (`/customers/{customerId}/clients`)
- Vehicle Management (`/users/{userId}/vehicles`)
- Customer Settings (`/customers/{customerId}/settings`)

### Version 2 (v2)
- Customer Management (`/v2/customers`)

## 🚀 Deployment Options

### 1. GitHub Pages (Recommended)

The easiest way to deploy your documentation:

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages"
   - Select "GitHub Actions" as source

2. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Add deployment configuration"
   git push origin main
   ```

3. **Access your docs**:
   - Your documentation will be available at: `https://[username].github.io/[repository-name]`
   - The GitHub Action will automatically build and deploy on every push

### 2. Local Development

You have two options for local development:

#### Option A: Using npm (Simple)

```bash
# Install dependencies
npm install

# Build documentation
npm run build-docs

# Serve locally
npm run serve-docs

# Validate OpenAPI spec
npm run validate
```

Access your local documentation at: `http://localhost:8080`

#### Option B: Using Docker (Recommended)

```bash
# Start Swagger UI container
docker-compose up -d

# Stop the container
docker-compose down
```

Access your local documentation at: `http://localhost:8080`

The Docker option provides a consistent environment and uses the official Swagger UI container.

## Getting Started

### Prerequisites
- [Postman](https://www.postman.com/downloads/) installed on your machine
- Access to the Optipix API endpoints

### Accessing the Documentation

You can access the complete API documentation directly in Postman through our workspace:
[Optipix API Documentation](https://www.postman.com/adriaopticom/workspace/my-workspace/api/bc392794-387b-45f6-8c8a-b219be361c90?action=share&creator=41305983&active-environment=41305983-754dc4f4-d03e-421c-a191-4600ddf82404)

### Setting Up in Postman

1. Clone this repository:
   ```bash
   git clone [repository-url]
   cd optipix-backend-docs
   ```

2. Import the API into Postman:
   - Open Postman
   - Click on "Import" button
   - Select the `index.yaml` file from this repository
   - Postman will automatically import all the API definitions and create a collection

3. Configure your environment:
   - Create a new environment in Postman
   - Set the following variables:
     - `baseUrl`: The base URL of your API (e.g., `https://api.optipix.eu`)
     - `apiKey`: Your API key for authentication

### Using the API

1. Authentication:
   - Use the `/login` endpoint to authenticate
   - The API uses API Key authentication (X-Api-Key header)

2. Making Requests:
   - All endpoints are documented in the respective YAML files
   - Request/response schemas are defined in the `schemas` directories
   - Common responses (400, 401, 403, 404) are standardized

## Development

### Adding New Endpoints

1. Create or modify the appropriate YAML file in the version directory (v1 or v2)
2. Add the endpoint reference to `index.yaml`
3. Define any new schemas in the corresponding `schemas` directory
4. Update the Postman collection by re-importing the API

### Best Practices

- Keep the documentation modular by separating endpoints into logical files
- Use schema references to maintain consistency
- Follow the existing pattern for versioning
- Document all request/response schemas
- Include examples where possible

## Contributing

1. Create a new branch for your changes
2. Make your modifications
3. Test the changes in Postman
4. Submit a pull request

## License

[Add your license information here]

