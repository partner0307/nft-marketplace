import styled from 'styled-components';

import Background from '../../../../../assets/img/screen.png';

export const SidebarContainer = styled.div`
    max-width: 300px;
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const ListContainer = styled.div`
    background: rgb(140, 0, 0);
`

export const Title = styled.div`
    height: 90px;
    background: no-repeat url(${Background});
    background-position: top center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ItemIcon = styled.img`
    width: 40px;
    height: 100%;
`