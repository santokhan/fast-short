import swaggerJSDoc from "swagger-jsdoc";

const specs = swaggerJSDoc({
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'FastShort Express API with Swagger',
      version: '1.0.0',
      description: 'A simple Express API for FastShort URL Shortener',
    },
  },
  apis: [
    './src/routes/*.js',
    './src/router/*.js'
  ], // Path to the API routes
});

export default specs;
