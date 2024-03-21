const express = require('express');
const { AssemblyAI } = require('assemblyai');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001; // Ensure this port doesn't conflict with your React app

const assembly = new AssemblyAI('da31972ab1db46809060fe87d6660f43');

app.use(cors()); // Use CORS to allow requests from your React app
app.use(bodyParser.json());

app.post('/transcribe', async (req, res) => {
  try {
    const { audio_url } = req.body;
    const transcriptResponse = await assembly.transcribe({ audio_url });
    // Assuming immediate response for simplicity. In real scenarios, you might need to poll for the result.
    res.json(transcriptResponse);
  } catch (error) {
    console.error('Error with AssemblyAI transcription:', error);
    res.status(500).send('Error processing transcription');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
