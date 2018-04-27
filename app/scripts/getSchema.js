var fetch = require('node-fetch');
var fs = require('fs');

const {
  buildClientSchema,
  introspectionQuery,
  printSchema,
} = require('graphql/utilities');

console.log('Start get schema...');
const path = 'data/schema.graphql';

fetch('http://localhost:5000/graphql', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ 'query': introspectionQuery }),
})
.then(res => res.json())
.then(res => {
  console.log('GraphQL response: ', res);
  const schemaString = printSchema(buildClientSchema(res.data));

  fs.writeFileSync(path, schemaString);
})
.then(() => console.log('Schema generated on %s', path));
