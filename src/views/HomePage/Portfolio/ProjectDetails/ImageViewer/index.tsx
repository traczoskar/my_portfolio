import { useEffect, useRef, useState } from "react";
import {
  CloseButton,
  Image,
  ImageContainer,
  UserInstruction,
  ViewerContainer,
} from "./styled";
import { Screenshot } from "../../../../../types/types";

interface ImageViewerProps {
  image: Screenshot;
  onClose: () => void;
}

const ImageViewer = ({ image, onClose }: ImageViewerProps) => {
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

    const containerElement = containerRef.current;
    if (containerElement) {
      containerElement.addEventListener("wheel", handleWheel);
      containerElement.addEventListener("click", handleClick);
    }

    return () => {
      if (containerElement) {
        containerElement.removeEventListener("wheel", handleWheel);
        containerElement.removeEventListener("click", handleClick);
      }
    };
  }, [onClose, scale]);

  return (
    <ViewerContainer ref={containerRef}>
      <UserInstruction>Use mouse wheel to zoom +/-</UserInstruction>
      <ImageContainer>
        <Image
          src={image.imageUrl}
          alt={image.alt}
          style={{ transform: `scale(${scale})` }}
        />
        <CloseButton onClick={onClose}>x</CloseButton>
      </ImageContainer>
    </ViewerContainer>
  );
};

export default ImageViewer;
