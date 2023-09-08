
import express from 'express'
import 'dotenv/config'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const root =  dirname(dirname(__filename));

const app = express()
const port = 3000

var client_id = process.env.OAUTH_CLIENT_ID
var client_secret = process.env.OAUTH_CLIENT_SECRET

app.get('/notion-organizador-notas', (req, res) => {
  res.sendFile('frontend/index.html', {root: root})
})

app.get('/notion-organizador-notas/app.html', (req, res) => {
  res.sendFile('frontend/app.html', {root: root})
})

app.listen(port, () => {
  console.log(`Notion organizador notas app listening on port ${port}`)
})