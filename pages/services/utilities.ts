import path from 'path';
import fs from 'fs/promises';
async function getData() {
    const filePath = path.join(process.cwd(), 'mock-data.json');
    const jsonData = await fs.readFile(filePath);
    return JSON.parse(jsonData.toString());
}