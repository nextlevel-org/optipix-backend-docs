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

## Getting Started

### Prerequisites
- [Postman](https://www.postman.com/downloads/) installed on your machine
- Access to the Optipix API endpoints

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
     - `baseUrl`: The base URL of your API (e.g., `http://localhost:3000`)
     - `apiKey`: Your API key for authentication

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

