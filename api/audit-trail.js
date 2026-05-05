import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // 1. Allow Mambu to talk to this script
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Content-Type', 'text/html');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 2. Read your HTML file from the root directory
  try {
    const filePath = path.join(process.cwd(), 'audit-trail-mambu-app1.html');
    const htmlContent = fs.readFileSync(filePath, 'utf8');

    // 3. Send the HTML back with a 200 OK status
    res.status(200).send(htmlContent);
  } catch (error) {
    res.status(500).send("Error loading HTML file: " + error.message);
  }
}
