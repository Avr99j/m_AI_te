// import React, { useState, useEffect } from 'react';
// import axios from './axiosConfig';
// import  { ImgId }  from "./ImageGenerator";
// import ReactPlayer from 'react-player';
// import Spinner from './Spinner';



const MotionGenerator = () => {
    const [motionUrl, setMotionUrl] = useState('');
    const [loading, setLoading] = useState(false);
console.log(ImgId);




    const generateMotion = async () => {
    try {
        setLoading(true);
        const reponse = await axios.post('/generations-motion-svd', 
        {
            imageId: ImgId,
            motionStrength: 5
        }
        );
        console.log(reponse);
        const motionGenerationId = reponse.data.motionSvdGenerationJob.generationId; // Assuming the response structure has a 'generationID' field
        console.log(motionGenerationId);
        setTimeout(async () => {
            try {
                const motionResponse = await axios.get(`/generations/${motionGenerationId}`);
                console.log(motionResponse);
                const generatedMotion = motionResponse.data.generations_by_pk.generated_images[0].motionMP4URL
                

                // const urls = generatedImages.map((image) => image.url)
                console.log(generatedMotion);
                console.log(ImgId);



                setMotionUrl(generatedMotion);

            } catch (error) {
                console.error('Error fetching image URLs:', error);
            } finally {
                setLoading(false); // Set loading to false when image is loaded
              }
        }, 80000);
    } catch (error) {
        console.error('Error generating image:', error);

    }

};
return (
    <div>
        
        <button onClick={generateMotion}>Add motion</button>
        {loading ? <Spinner /> : motionUrl && <ReactPlayer playing muted={true} loop={true} url={motionUrl}   />}
    </div>
);
};      

export default MotionGenerator;


