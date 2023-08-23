import { ImageContainer, ImagePropsInterface, StyledImage } from "./style";

export interface ImageProps extends ImagePropsInterface {
    src: string,
    alt: string,
}

const Image = ({ ...props }: ImageProps) => {
    const { src, alt, ...rest } = props;
    return (
        <ImageContainer {...rest}>
            <StyledImage src={src} alt={alt} />
        </ImageContainer>
    )
}

export default Image;
