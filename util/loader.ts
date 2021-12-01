import fs from 'fs/promises';
import { join } from 'path'
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const cvPath = join(process.cwd(), 'README.md');
export const getCvText = async () => {
    return fs.readFile(cvPath, 'utf-8');
}

export const getCvHtml = async () => {
    const text = await getCvText();
    const processed = await remark().use(remarkHtml).process(text);
    return processed.toString();
}