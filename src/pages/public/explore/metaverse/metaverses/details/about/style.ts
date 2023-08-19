import styled from 'styled-components';

export const AboutContainer = styled.div`
    position: relative;
    display: flex;
    gap: 26px;
    padding: 24px 0 32px;
`;

export const AboutWrapper = styled.div`
    display: flex;
    width: 903px;
    padding: 24px;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
    border-radius: 16px;
    background: #0C0C0C;
`

export const Options = styled.div`
    display: flex;
    width: 440px;
    flex: 1;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    border-radius: 16px;
    background: #0C0C0C;
`;

export const StatusBar = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    gap: 4px;
    border-radius: 16px;
    color: #8D8E8D;
    border: 1px solid #1A1A1A;
    background: #0C0C0C;
`;

export const StatusBar1 = styled.div`
    display: flex;
    padding: 24px;
    align-items: flex-start;
    gap: 16px;
    border-radius: 16px;
    border: 1px solid #1A1A1A;
    background: #0C0C0C;
`;

export const Rect = styled.div`
    position: absolute;
    top: 192px;
    right: -472px;
    width: 978px;
    height: 972px;
    border-radius: 978px;
    background: rgba(104, 235, 227, 0.10);
    filter: blur(150px);
`