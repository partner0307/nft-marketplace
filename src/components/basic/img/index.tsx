import { ImageContainer, ImagePropsInterface, StyledImage } from "./style";

const Image = ({ ...props }: ImagePropsInterface) => {
    return (
        <ImageContainer>
            <StyledImage {...props} />
        </ImageContainer>
    )
}

export default Image;
