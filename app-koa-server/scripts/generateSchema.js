import fs from 'fs';
import path from 'path';
import { graphql } from 'graphql';
import { introspectionQuery, printSchema } from 'graphql/utilities';
import { schema } from '../src/data/schema';

async function generateSchema() {
  const relativePath = '../schemas/graphql';

  const jsonSchema = await graphql(schema, introspectionQuery);

  if (jsonSchema.errors) {
    console.error('ERROR: ', JSON.stringify(result.errors, null, 2));
  } else {
    // fs.writeFileSync(path.join(__dirname, `${relativePath}/schema.graphql`), printSchema(schema));
    await fs.writeFileSync(path.join(__dirname, `${relativePath}/schema.json`), JSON.stringify(jsonSchema, null, 2));
    console.log('Schema created at ', relativePath);
  }
}

(async () => {
  console.log('generating schema');

  await generateSchema(),

  process.exit(0);
})();
