import React from "react";
import { InputBoard, InputContainer, InputContent, InputLabel, InputWrapper, StyledInput, StyledTextarea } from "./style";

type InputPropsType = {
    label?: string | React.ReactNode
    value: string
    onChange?: any
    placeholder?: string
    helpSide?: any
    padding?: string,
    radius?: string,
    bg?: string,
    border?: string
}

export const Input: React.FC<InputPropsType> = ({
    label,
    helpSide,
    padding,
    radius,
    bg,
    border,
    ...rest
}) => {
    return (
        <InputContainer>
            {label && (<InputLabel>{label}</InputLabel>)}
            <InputContent>
                <InputWrapper padding={padding ?? ''}>
                    <StyledInput {...rest} />
                    {helpSide}
                </InputWrapper>
                <InputBoard radius={radius ?? ''} bg={bg ?? ''} border={border ?? ''} />
            </InputContent>
        </InputContainer>
    )
}

type TextareaPropsType = InputPropsType & {
    rows?: number
}

export const Textarea: React.FC<TextareaPropsType> = ({
    label,
    helpSide,
    rows,
    radius,
    ...rest
}) => {
    return (
        <InputContainer>
            {label && (<InputLabel>{label}</InputLabel>)}
            <InputContent>
                <InputWrapper padding="">
                    <StyledTextarea as="textarea" rows={rows ? rows : 5} {...rest} />
                    {helpSide}
                </InputWrapper>
                <InputBoard radius='' bg='' border="" />
            </InputContent>
        </InputContainer>
    )
}
