
import express from 'express'
import 'dotenv/config'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const root =  dirname(dirname(__filename));

const app = express()
const port = 3000

const dist_path = 'frontend/notion-organizador-notas/dist'

var client_id = process.env.OAUTH_CLIENT_ID
var client_secret = process.env.OAUTH_CLIENT_SECRET

app.get('/notion-organizador-notas', (req, res) => {
  res.sendFile(`${dist_path}/index.html`, {root: root})
})

app.get('/notion-organizador-notas/app.html', (req, res) => {
  res.sendFile(`${dist_path}/app.html`, {root: root})
})

app.get('/notion-organizador-notas/assets/:file', (req, res) => {
  res.sendFile(`${dist_path}/notion-organizador-notas/assets/${req.params.file}`, {root: root})
})

app.listen(port, () => {
  console.log(`Notion organizador notas app listening on port ${port}`)
})