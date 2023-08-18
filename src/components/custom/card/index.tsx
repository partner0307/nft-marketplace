import React from "react";
import { CardContainer, CardContainerPropsInterface } from "./style";

export interface CardPropsInterface extends CardContainerPropsInterface {
    children: React.ReactNode
}

const Card: React.FC<CardPropsInterface> = ({ children }) => {
    return (
        <CardContainer>
            {children}
        </CardContainer>
    )
}

export default Card;
