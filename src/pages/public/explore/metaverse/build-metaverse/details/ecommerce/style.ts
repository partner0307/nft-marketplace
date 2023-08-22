import styled from 'styled-components';

export const EcommerceContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 24px 32px;
    flex-direction: column;
    gap: 29px;
    border-radius: 1rem;
    border: 1px solid #3D3D3E;
    background: rgba(25, 25, 25, 0.80);
    backdrop-filter: blur(7.5px);
`;

export const Banner = styled.div`
    width: 37.125rem;
    height: 11rem;
    border-radius: 1rem 0px 0px 1rem;
    position: relative;
`;

export const BannerImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 1rem 0 0 1rem;
`;

export const IconBar = styled.div`
    position: absolute;
    top: 15px;
    left: 20px;
    display: flex;
    padding: 4px 8px;
    align-items: center;
    gap: 20px;
    border-radius: 4px;
    background: rgba(12, 13, 14, 0.20);
`;

export const BannerContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: .5rem;
    padding: 1.5rem;
    background: #067299;
    border-radius: 0 1rem 1rem 0;
`;

export const CustomDropdown = styled.div`
    display: flex;
    width: 300px;
    padding: 8px 12px;
    border-radius: 12px;
    border: 1px solid #2B2928;
    background: #191919;
`;

export const CustomFont = styled.div`
    color: #8DD3ED;
    font-size: 1.25rem;
    font-weight: 600;
    text-decoration-line: strikethrough;
`;

export const Line = styled.div`
    width: 0.0625rem;
    background: #8DD3ED;
`