import React from 'react';
import { RadioContainer } from './style';

export const InActiveRadioOption = () => {
    return (
        <RadioContainer>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <circle cx="12.0278" cy="12.5278" r="11.5" transform="rotate(-0.132773 12.0278 12.5278)" stroke="#8F9090"/>
            </svg>
        </RadioContainer>
    )
}

export const ActiveRadioOption = () => {
    return (
        <RadioContainer>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <circle cx="12.0278" cy="12.5278" r="11.5" transform="rotate(-0.132773 12.0278 12.5278)" stroke="#D75A80"/>
                <circle cx="12.0278" cy="12.5278" r="8" transform="rotate(-0.132773 12.0278 12.5278)" fill="#D75A80"/>
            </svg>
        </RadioContainer>
    )
}