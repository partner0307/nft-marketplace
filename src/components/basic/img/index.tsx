import { ImageContainer, ImagePropsInterface, StyledImage } from "./style";

interface ImageProps extends ImagePropsInterface {
    src: string,
    alt: string,
}

const Image = ({ ...props }: ImageProps) => {
    const { src, alt, h, ...rest } = props;
    return (
        <ImageContainer h={h}>
            <StyledImage src={src} alt={alt} />
        </ImageContainer>
    )
}

export default Image;
