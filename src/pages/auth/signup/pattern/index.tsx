import React from 'react';
import { PatternContainer } from './style';

type PatternType = {
    isSelected?: boolean
}

const Pattern: React.FC<PatternType> = ({ isSelected }) => {
    return (
        <PatternContainer>
            <svg xmlns="http://www.w3.org/2000/svg" width="303" height="204" viewBox="0 0 303 204" fill={isSelected ? '#2A282B' : 'none'}>
                <path d="M0.5 14.5444C0.5 8.83293 4.88004 4.33294 10.4778 2.23083C16.0745 0.129126 22.6892 0.505707 26.982 4.33618C51.6489 26.3468 93.0628 52.2 151.5 52.2C209.937 52.2 251.351 26.3468 276.018 4.33618C280.311 0.505703 286.925 0.12912 292.522 2.23082C298.12 4.33293 302.5 8.83292 302.5 14.5444V191.5C302.5 197.851 297.351 203 291 203H12C5.64872 203 0.5 197.851 0.5 191.5V14.5444Z" stroke={isSelected ? '#D75A80' : '#3D3D3E'} />
            </svg>
        </PatternContainer>
    )
}

export default Pattern;