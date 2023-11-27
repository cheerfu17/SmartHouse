import { readFile, readFileSync} from 'fs';

export default async function readJSONValue(fileName, key){
    const json = readFileSync(fileName, 'utf8');
    

    const object = JSON.parse(json);
    console.log(object[key]);
    return object[key];
}