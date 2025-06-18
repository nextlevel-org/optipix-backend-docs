const fs = require('fs');
const path = require('path');

// Create docs directory if it doesn't exist
const docsDir = path.join(__dirname, '..', 'docs');
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

// HTML template for Swagger UI
const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Optipix API Documentation</title>
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui.css" />
    <style>
        html { 
            box-sizing: border-box; 
            overflow: -moz-scrollbars-vertical; 
            overflow-y: scroll; 
        }
        *, *:before, *:after { 
            box-sizing: inherit; 
        }
        body { 
            margin: 0; 
            background: #fafafa; 
        }
        /* Hide topbar - with increased specificity */
        body .swagger-ui .topbar,
        #swagger-ui .swagger-ui .topbar {
            display: none !important;
        }
        /* Hide filter box */
        .swagger-ui .filter-container {
            display: none;
        }
        /* Adjust top margin since we removed the header */
        .swagger-ui .wrapper {
            padding: 0;
            max-width: 1460px;
            margin: 0 auto;
        }
        .swagger-ui .information-container {
            padding: 30px 0;
            margin: 0;
            background: #fff;
            border-bottom: 1px solid #eee;
        }
        /* Make the content full-width */
        .swagger-ui .scheme-container {
            padding: 20px 0;
            margin: 0;
        }
        /* Improve the layout of endpoints */
        .swagger-ui .opblock {
            margin: 0 0 15px;
            border-radius: 4px;
            box-shadow: 0 0 3px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body>
    <div id="swagger-ui"></div>
    <script src="https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui-bundle.js"></script>
    <script src="https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui-standalone-preset.js"></script>
    <script>
        window.onload = function() {
            const ui = SwaggerUIBundle({
                url: './index.yaml',
                dom_id: '#swagger-ui',
                deepLinking: true,
                presets: [
                    SwaggerUIBundle.presets.apis,
                    SwaggerUIStandalonePreset
                ],
                plugins: [
                    SwaggerUIBundle.plugins.DownloadUrl
                ],
                layout: "BaseLayout", // Changed from StandaloneLayout to remove header
                validatorUrl: null,
                docExpansion: 'list',
                filter: false, // Disable filter
                displayRequestDuration: true,
                defaultModelsExpandDepth: -1, // Hide schema section by default
                showExtensions: true,
                showCommonExtensions: true
            });
        };
    </script>
</body>
</html>`;

// Write the HTML file
fs.writeFileSync(path.join(docsDir, 'index.html'), htmlTemplate);

// Copy the OpenAPI spec file
const specFile = path.join(__dirname, '..', 'index.yaml');
const specDest = path.join(docsDir, 'index.yaml');
fs.copyFileSync(specFile, specDest);

// Copy all YAML files from v1 and v2 directories
const copyYamlFiles = (sourceDir, destDir) => {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  const files = fs.readdirSync(sourceDir);
  files.forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    const destPath = path.join(destDir, file);
    
    if (fs.statSync(sourcePath).isDirectory()) {
      copyYamlFiles(sourcePath, destPath);
    } else if (file.endsWith('.yaml') || file.endsWith('.yml')) {
      fs.copyFileSync(sourcePath, destPath);
    }
  });
};

// Copy v1 and v2 directories
copyYamlFiles(path.join(__dirname, '..', 'v1'), path.join(docsDir, 'v1'));
copyYamlFiles(path.join(__dirname, '..', 'v2'), path.join(docsDir, 'v2'));

console.log('✅ Documentation built successfully in docs/ directory');
console.log('📁 Files generated:');
console.log('  - docs/index.html (Swagger UI)');
console.log('  - docs/index.yaml (OpenAPI spec)');
console.log('  - docs/v1/ (v1 API files)');
console.log('  - docs/v2/ (v2 API files)'); 