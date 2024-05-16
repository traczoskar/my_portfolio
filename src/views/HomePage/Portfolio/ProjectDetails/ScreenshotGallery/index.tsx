import { useState } from "react";
import { GalleryContainer, Thumbnail } from "./styled";
import ImageViewer from "../ImageViewer";
import { Screenshot } from "../../../../../types/types";

interface ScreenshotGalleryProps {
  screenshots: Screenshot[] | undefined;
}

const ScreenshotGallery = ({ screenshots }: ScreenshotGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseViewer = () => {
    setSelectedImageIndex(null);
  };

  return (
    <>
      <GalleryContainer>
        {screenshots?.map((screenshot, index) => (
          <Thumbnail
            key={index}
            src={screenshot.imageUrl}
            alt={screenshot.alt}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </GalleryContainer>
      {selectedImageIndex !== null && (
        <ImageViewer
          images={screenshots}
          currentIndex={selectedImageIndex}
          onClose={handleCloseViewer}
          onNavigate={(newIndex) => setSelectedImageIndex(newIndex)}
        />
      )}
    </>
  );
};

export default ScreenshotGallery;
