import swaggerJSDoc from "swagger-jsdoc";

const specs = swaggerJSDoc({
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
      description: 'A sample API for learning Swagger with Express'
    },
  },
  apis: [
    './src/routes/*.js',
    './src/router/*.js'
  ], // Path to the API routes
});

export default specs;
