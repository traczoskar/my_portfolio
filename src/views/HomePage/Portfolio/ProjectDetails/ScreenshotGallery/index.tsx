import { useState } from "react";
import { GalleryContainer, Thumbnail } from "./styled";
import ImageViewer from "../ImageViewer";
import { Screenshot } from "../../../../../types/types";

interface ScreenshotGalleryProps {
  screenshots: Screenshot[] | undefined;
  onOpenViewer: () => void;
  onCloseViewer: () => void;
}

const ScreenshotGallery = ({
  screenshots,
  onOpenViewer,
  onCloseViewer,
}: ScreenshotGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    onOpenViewer();
  };

  const handleCloseViewer = () => {
    setSelectedImageIndex(null);
    onCloseViewer();
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
