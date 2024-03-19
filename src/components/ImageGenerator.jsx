import React, { useState } from 'react';
// import axios from './axiosConfig'; 
// import Spinner from './Spinner';

let ImgId = '';

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
 

  const generateImage = async () => {
    try {
      setLoading(true);
      const response = await axios.post('/generations', {
        prompt: prompt,
        height: 512,
        modelId: '',
        width: 512,
        
        alchemy: true,
  photoReal: true,
  photoRealStrength: 0.5,
  presetStyle: "CINEMATIC"
     
      });
      console.log(response);
      const generationId = response.data.sdGenerationJob.generationId;
      console.log(generationId);


      setTimeout(async () => {
        try {
          const imageResponse = await axios.get(`/generations/${generationId}`);
          console.log(imageResponse);
          const generatedImages = imageResponse.data.generations_by_pk.generated_images[0].url
          
          ImgId = imageResponse.data.generations_by_pk.generated_images[0].id
         
          
        console.log(generatedImages);
        console.log(ImgId);
         

          
          setImageUrl(generatedImages); 
          
        } catch (error) {
          console.error('Error fetching image URLs:', error);
        } finally {
          setLoading(false); 
        }
      }, 28000);
    } catch (error) {
      console.error('Error generating image:', error);
   
    } 

    };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={generateImage}>Generate Image</button>
      {loading ? <Spinner /> : imageUrl && <img src={imageUrl} alt="Generated Image" />}
    </div>
  );
};

export {ImgId}
export default ImageGenerator;
