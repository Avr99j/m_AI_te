import React from 'react';

import SpeechButton from './speechButton/SpeechButton';
import ImageButton from './imageButton/ImageButton';

const SpeechAndImageContainer = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <SpeechButton />
                <ImageButton />
            </div>
        </div>
    );
}

export default SpeechAndImageContainer;