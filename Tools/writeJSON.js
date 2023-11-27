import { readFileSync, writeFileSync } from 'fs';

export default async function writeJSON(fileName, key, value){
    const json = readFileSync(fileName, 'utf8');

    const object = JSON.parse(json);
    object[key] = value;

    const json_changed = JSON.stringify(object);
    writeFileSync(fileName, json_changed);
}