import styled from 'styled-components';

export const TitleBar = styled.div`
    display: flex;
    width: 902px;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    border-radius: 16px;
    background: #0C0C0C;
`;

export const Activity = styled.div`
    display: flex;
    width: 895px;
    height: 524px;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    flex-shrink: 0;
    border-radius: 16px;
    background: #121112;
`;

export const Transaction = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    flex-shrink: 0;
    border-radius: 16px;
    background: #121112;
`

export const Sales = styled.div`
    display: flex;
    padding: 32px 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    border-radius: 16px;
    border: 1px solid #1A1A1A;
    background: rgba(12, 12, 12, 0.90);
`;

export const NewsContainer = styled.div`
    display: flex;
    flex: 1;
    width: 440px;
    padding: 32px 24px;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    border-radius: 16px;
    border: 1px solid #1E1E20;
    background: rgba(12, 13, 14, 0.80);
`

export const Similars = styled.div`
    display: flex;
    padding: 32px 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    border-radius: 16px;
    border: 1px solid #1A1A1A;
    background: rgba(12, 12, 12, 0.90);
`

export const CustomButton = styled.button`
    color: #BEBCBE;
    padding: 12px 18px;
    border-radius: 32px;
    border: 1px solid #2B2928;
    background: #191919;
`

export const CircleIcon = styled.div<{ color?: string }>`
    width: 14px;
    height: 14px;
    border-radius: 30px;
    ${({ color }) => color ? `background: ${color}` : ``}
`