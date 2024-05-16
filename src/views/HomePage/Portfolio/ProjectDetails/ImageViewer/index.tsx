import { useEffect, useRef, useState } from "react";
import {
  ArrowButton,
  CloseButton,
  Image,
  ImageContainer,
  ScreenshotDescription,
  UserInstruction,
  ViewerContainer,
} from "./styled";
import { Screenshot } from "../../../../../types/types";

interface ImageViewerProps {
  images: Screenshot[] | undefined;
  currentIndex: number;
  onNavigate: (newIndex: number) => void;
  onClose: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
  images,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const [scale, setScale] = useState<number>(0.8);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      const delta = event.deltaY > 0 ? -0.1 : 0.1;
      const newScale = Math.max(0.5, Math.min(2, scale + delta));
      setScale(newScale);
    };

    const handleClick = (event: MouseEvent) => {
      if (
        event.target === containerRef.current ||
        (event.target as HTMLElement).closest("img")
      ) {
        onClose();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" && images) {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      } else if (event.key === "ArrowRight" && images) {
        onNavigate((currentIndex + 1) % images.length);
      }
    };

    const containerElement = containerRef.current;
    if (containerElement) {
      containerElement.addEventListener("wheel", handleWheel);
      containerElement.addEventListener("click", handleClick);
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (containerElement) {
        containerElement.removeEventListener("wheel", handleWheel);
        containerElement.removeEventListener("click", handleClick);
        window.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [onClose, scale, currentIndex, images!.length, onNavigate]);
  // DOROBIĆ STRZAŁKI DO PRZESUWANIA ZDJĘCIA
  return (
    <ViewerContainer ref={containerRef}>
      <UserInstruction>Use mouse wheel to zoom +/-</UserInstruction>
      <ScreenshotDescription>{images![currentIndex].alt}</ScreenshotDescription>
      <ImageContainer>
        <ArrowButton
          onClick={() =>
            onNavigate((currentIndex - 1 + images!.length) % images!.length)
          }
        >
          ←
        </ArrowButton>
        <Image
          src={images![currentIndex].imageUrl}
          alt={images![currentIndex].alt}
          style={{ transform: `scale(${scale})` }}
        />
        <ArrowButton
          onClick={() => onNavigate((currentIndex + 1) % images!.length)}
        >
          →
        </ArrowButton>
        <CloseButton onClick={onClose}>x</CloseButton>
      </ImageContainer>
    </ViewerContainer>
  );
};

export default ImageViewer;
