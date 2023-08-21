import styled from 'styled-components';

export const CustomTab = styled.div`
    display: flex;
    padding: 12px 24px;
    align-items: center;
    gap: 4px;
    border-radius: 12px;
    background: #1E1E20;
    width: 100%;
`;

export const CustomColor = styled.div<{ color?: any }>`
    ${({ color }) => color ? `color: #8F9090;` : ``}
`