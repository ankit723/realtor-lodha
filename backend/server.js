require('dotenv').config(); // Load environment variables

const express = require('express');
const { google } = require('googleapis');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 8000;

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse incoming request bodies in a middleware

// Load environment variables
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const SHEET_NAME = process.env.SHEET_NAME;

// Decode the base64-encoded credentials JSON
const GOOGLE_CREDENTIALS = require('./credentials.json');

// Google Sheets API Authentication
const auth = new google.auth.GoogleAuth({
  credentials: GOOGLE_CREDENTIALS,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

// Route to handle form submission
app.post('/submit', async (req, res) => {
  const { name, email, country, state, mobile, whatsapp, enquire, siteVisit } = req.body;
  console.log("Hello the submit is called")

  try {
    // Append the form data to the Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:F`, // Adjust according to the number of columns
      valueInputOption: 'RAW',
      resource: {
        values: [
          [name, email, country, state, mobile, whatsapp, enquire, siteVisit],
        ],
      },
    });

    res.status(200).send('Form data saved successfully!');
  } catch (error) {
    console.error('Error saving data to Google Sheets:', error);
    res.status(500).send('Error saving data');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
