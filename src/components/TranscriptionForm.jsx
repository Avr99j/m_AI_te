import React, { useState } from 'react';

function TranscriptionForm() {
  const [audioUrl, setAudioUrl] = useState('');

  const handleSubmit = async () => {
    if (!audioUrl) {
      alert("Please enter an audio URL.");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/transcribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ audioUrl }),
      });
      const data = await response.json();
      alert(`Transcription ID: ${data.transcriptId}`); // For demonstration; consider updating UI instead
    } catch (error) {
      console.error('Error submitting audio for transcription:', error);
    }

    setAudioUrl(''); // Optionally clear the field
  };

  return (
    <div>
      <input
        type="text"
        value={audioUrl}
        onChange={(e) => setAudioUrl(e.target.value)}
        placeholder="Enter audio URL here"
      />
      <button onClick={handleSubmit}>Transcribe</button>
    </div>
  );
}

export default TranscriptionForm;
