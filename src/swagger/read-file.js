import yamljs from 'yamljs';
import path from 'path';

const swaggerDocument = yamljs.load(path.join(process.cwd(), 'src/swagger/api-docs', 'swagger.yaml'));

// console.log(swaggerDocument)

export default swaggerDocument;