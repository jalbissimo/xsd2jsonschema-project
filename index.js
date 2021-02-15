const express = require('express');
const app = express();
const Xsd2JsonSchema = require('xsd2jsonschema').Xsd2JsonSchema;
const xs2js = new Xsd2JsonSchema();
const xsd2JsonSchemaConst =require('xsdlibrary').xsd2jsonSchema;
const xsd2json = require('xsd2json2').xsd2json;

const fs = require('fs'); //reading a file using node file system

const port = 1997;

const XML_SCHEMA = fs.readFileSync('xsdFile.xsd', 'utf8');

//"start": "java -jar node_modules/jsonix/lib/jsonix-schema-compiler-full.jar xsdFile.xsd"
const xsdString = XML_SCHEMA; // your xml schema string
let xsd = xsd2JsonSchemaConst(xsdString); // does the same as https://www.convertsimple.com/convert-xsd-to-json-schema/


console.log(xsd)


app.get('/', function (req, res) {
    res.send(xsd)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
