import styled from "styled-components";
import variables from "../../../style/variable";
import { GV } from "../../../utils/style.util";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const InputLabel = styled.span`
    font-size: 0.8rem;
    font-weight: 900;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
`

export const InputContent = styled.div`
    position: relative;
`

export const InputWrapper = styled.label`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem;
    line-height: 3.5rem;
    min-height: 2.5rem;
    z-index: 1;
`

export const InputBoard = styled.div`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    width: 100%;
    height: 100%;
    background: ${GV('input-bg')};
    border-radius: 0.75rem;
    box-shadow: 0px 0px 0px 1px rgba(160, 140, 199, 0.16), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);
`

export const StyledInput = styled.input`
    width: 100%;
    display: block;
    min-width: 0;
    padding: 0;
    background: none;
    border: none;
    outline: none;
    font-size: 1rem;
`

export const StyledTextarea = styled(StyledInput)`
`
