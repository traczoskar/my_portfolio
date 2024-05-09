import { useState } from "react";
import { GalleryContainer, Thumbnail } from "./styled";
import ImageViewer from "../ImageViewer";
import { Screenshot } from "../../../../../types/types";

interface ScreenshotGalleryProps {
  screenshots: Screenshot[];
}

const ScreenshotGallery = ({ screenshots }: ScreenshotGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<Screenshot | null>(null);

  const handleImageClick = (image: Screenshot) => {
    setSelectedImage(image);
  };

  const handleCloseViewer = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <GalleryContainer>
        {screenshots.map((screenshot, index) => (
          <Thumbnail
            key={index}
            src={screenshot.imageUrl}
            alt={screenshot.alt}
            onClick={() => handleImageClick(screenshot)}
          />
        ))}
      </GalleryContainer>
      {selectedImage && (
        <ImageViewer image={selectedImage} onClose={handleCloseViewer} />
      )}
    </>
  );
};

export default ScreenshotGallery;
