import styled from 'styled-components'

export const MenuItem = styled.div<{ isActive?: false }>` 
    display: flex;
    width: 96px;
    height: 96px;
    padding: 24px;
    align-items: center;
    gap: 12px;
    border-radius: 16px;
    ${({ isActive }) => !isActive ? `border: 1px solid #3D3D3E;` : ``}
    ${({ isActive }) => isActive ? `background: #780640;` : `background: rgba(25, 25, 25, 0.80);`}
    backdrop-filter: blur(7.5px);
`