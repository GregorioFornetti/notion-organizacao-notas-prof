
import express from 'express'
import 'dotenv/config'
import fetch from 'node-fetch'

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from "cors"

const __filename = fileURLToPath(import.meta.url);
const root =  dirname(dirname(__filename));

const app = express()
const port = 3000
app.use(express.json(), cors())

const dist_path = 'frontend/notion-organizador-notas/dist'

var client_id = process.env.OAUTH_CLIENT_ID
var client_secret = process.env.OAUTH_CLIENT_SECRET

app.get('/notion-organizador-notas', (req, res) => {
  res.sendFile(`${dist_path}/index.html`, {root: root})
})

app.get('/notion-organizador-notas/assets/:file', (req, res) => {
  res.sendFile(`${dist_path}/notion-organizador-notas/assets/${req.params.file}`, {root: root})
})

app.post('/notion-organizador-notas/auth', (req, res) => {
  fetch('https://api.notion.com/v1/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString('base64')}`
    },
    body: JSON.stringify({
      grant_type: 'authorization_code',
      code: req.body.code,
      redirect_uri: process.env.VITE_REDIRECT_URI
    })
  })
  .then((response) => response.json())
  .then((data) => {
    res.send(data.bot_id)
  })
})

app.listen(port, () => {
  console.log(`Notion organizador notas app listening on port ${port}`)
})