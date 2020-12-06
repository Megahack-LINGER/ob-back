const express = require('express')
const app = express()
const port = 3001


// GENERAL
app.get('/', (req, res) => {
  res.send('API CISA FOR Developer')
})

app.get('/version', (req, res) => {
  res.send('API CISA 1.0')
})

app.get('/status', (req, res) => {
  res.send('UP')
})


// ACCOUNT ENDPOINTS
app.get('/acc', (req, res) => {
  res.send('API CISA for accounts')
})

app.get('/acc/customers', (req, res) => {
  res.send('API CISA 1.0')
})

app.get('/acc/customer', (req, res) => {
  res.send('API CISA 1.0')
})

app.get('/acc/saldo', (req, res) => {
  res.send('API CISA 1.0')
})


// PAYMENT SERVICE
app.get('/pay', (req, res) => {
  res.send('API CISA for payment')
})


app.get('/pay/credito', (req, res) => {
  res.send('API CISA 1.0')
})


app.get('/pay/debito', (req, res) => {
  res.send('API CISA 1.0')
})


app.get('/pay/saldo', (req, res) => {
  res.send('API CISA 1.0')
})


// consents - Consents administrations
app.get('/consents', (req, res) => {
  res.send('API CISA 1.0 Consents')
})


//  API Gateway for Banks
app.get('/integrations', (req, res) => {
  res.send('API CISA 1.0 Integration')
})

// Integration with banks
app.get('/banks', (req, res) => {
  res.send('API CISA 1.0 Integration')
})

//  Public API for customers, partners and developers
app.get('/public', (req, res) => {
  res.send('API CISA 1.0 Public')
})

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
