import { readFile, readFileSync} from 'fs';

export default function readJSONValue(fileName, key){
    const json = readFileSync(fileName, 'utf8');

    const object = JSON.parse(json);
    return object[key];
}