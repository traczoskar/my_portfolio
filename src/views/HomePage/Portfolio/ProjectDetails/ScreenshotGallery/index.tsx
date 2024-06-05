import { useEffect, useState } from "react";
import { GalleryContainer, Placeholder, Thumbnail } from "./styled";
import ImageViewer from "../../../../../common/ImageViewer";
import { Screenshot } from "../../../../../types/types";
import Loader from "../../../../../common/Loader";

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
  const [loadedImages, setLoadedImages] = useState<boolean[]>([]);

  useEffect(() => {
    if (screenshots) {
      setLoadedImages(new Array(screenshots.length).fill(false));
    }
  }, [screenshots]);

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => {
      const newLoadedImages = [...prev];
      newLoadedImages[index] = true;
      return newLoadedImages;
    });
  };

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
          <div key={index}>
            {!loadedImages[index] && (
              <Placeholder>
                <Loader />
              </Placeholder>
            )}
            <Thumbnail
              key={index}
              src={screenshot.imageUrl}
              alt={screenshot.alt}
              onClick={() => handleImageClick(index)}
              onLoad={() => handleImageLoad(index)}
              style={{ display: loadedImages[index] ? "block" : "none" }}
            />
          </div>
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
