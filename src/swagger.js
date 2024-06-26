import swaggerJSDoc from "swagger-jsdoc";

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
      description: 'A sample API for learning Swagger with Express'
    },
  },
  apis: ['./routes/users.js'], // Path to the API routes
  host: 'localhost:5000',
  basePath: '/',
};

const specs = swaggerJSDoc(options);

export default specs;
