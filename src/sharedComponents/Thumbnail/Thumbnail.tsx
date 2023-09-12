import { ThumbnailImage, ThumbnailWrapper } from "./ThumbnailStyles";

interface IThumbnail {
  width?: number;
  height?: number;
  image: string;
  title?: string;
}

const Thumbnail: React.FC<IThumbnail> = ({ width, height, image, title }) => {
  return (
    <ThumbnailWrapper>
      <ThumbnailImage
        width={width}
        height={height}
        src={image}
        alt={title}
      />
    </ThumbnailWrapper>
  );
}

export default Thumbnail;