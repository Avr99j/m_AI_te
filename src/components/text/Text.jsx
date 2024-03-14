import React from 'react';
import BotContainer from '../botContainer/BotContainer';
import './text.css';
import { useState } from 'react';
import Chatbot from 'react-chatbot-kit'
import config from './config'
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

function Text() {


    return (
        <div className="container">
            <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
            />

        </div>
    )
}

export default Text
