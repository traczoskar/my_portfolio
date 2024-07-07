import { useCallback, useEffect, useRef, useState } from "react";
import {
  CloseButton,
  Image,
  ImageContainer,
  ScreenshotDescription,
  UserInstruction,
  ViewerContainer,
  ImageInfo,
  InstructionContainer,
  ArrowButton,
} from "./styled";
import { ReactComponent as NextArrow } from "../../assets/icons/next.svg";
import { ReactComponent as PreviousArrow } from "../../assets/icons/previous.svg";
import Keyboard from "../../views/HomePage/Portfolio/ProjectDetails/KeyboardInstruct/Keyboard";
import { Screenshot } from "../../types/types";
import { useMediaQuery } from "react-responsive";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useSwipeable } from "react-swipeable";
import SwipeInstruction from "./SwipeInstruction";
import { AnimatePresence } from "framer-motion";

interface ImageViewerProps {
  isCertificates?: boolean;
  images?: Screenshot[];
  image?: Screenshot;
  currentIndex?: number;
  onNavigate?: (newIndex: number) => void;
  onClose: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
  images,
  image,
  currentIndex = 0,
  onClose,
  isCertificates,
  onNavigate,
}) => {
  const [scale, setScale] = useState<number>(0.8);
  const containerRef = useRef<HTMLDivElement>(null);
  const transformWrapperRef = useRef<any>(null);
  const isTablet: boolean = useMediaQuery({
    query: `(max-width: 1199px)`,
  });
  const isMobile: boolean = useMediaQuery({
    query: `(max-width: 767px)`,
  });

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
      if (images) {
        if (event.key === "ArrowLeft") {
          onNavigate!((currentIndex - 1 + images.length) % images.length);
        } else if (event.key === "ArrowRight") {
          onNavigate!((currentIndex + 1) % images.length);
        }
      }
      if (event.key === "ArrowUp") {
        setScale((prevScale) => Math.min(prevScale + 0.1, 2));
      } else if (event.key === "ArrowDown") {
        setScale((prevScale) => Math.max(prevScale - 0.1, 0.5));
      } else if (event.key === "Escape") {
        onClose();
      }
    };

    const containerElement = containerRef.current;
    if (containerElement) {
      containerElement.addEventListener("wheel", handleWheel);
      containerElement.addEventListener("click", handleClick);
      window.addEventListener("keydown", handleKeyDown);
      containerElement.focus();
    }

    return () => {
      if (containerElement) {
        containerElement.removeEventListener("wheel", handleWheel);
        containerElement.removeEventListener("click", handleClick);
        window.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [onClose, scale, currentIndex, images, onNavigate]);

  const handleSwipe = useCallback(
    (direction: string) => {
      if (images) {
        if (direction === "LEFT") {
          onNavigate!((currentIndex + 1) % images.length);
        } else if (direction === "RIGHT") {
          onNavigate!((currentIndex - 1 + images.length) % images.length);
        }
      }
    },
    [currentIndex, images, onNavigate]
  );

  const currentImage = images ? images[currentIndex] : image;

  useEffect(() => {
    if (transformWrapperRef.current) {
      transformWrapperRef.current.centerView();
    }
  }, [currentImage]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("LEFT"),
    onSwipedRight: () => handleSwipe("RIGHT"),
  });

  return (
    <>
      {!isTablet ? (
        <ViewerContainer ref={containerRef} tabIndex={-1}>
          <InstructionContainer>
            <UserInstruction>
              Use <strong>Mouse Wheel</strong> to 🔍 zoom +/-
              <br />
              Use <strong>Arrow Up</strong> and <strong>Arrow Down</strong> to
              zoom +/- <br />
              {images && (
                <>
                  Use <strong>Arrow Left</strong> and{" "}
                  <strong>Arrow Right</strong> to change the screenshot. <br />
                </>
              )}
              Press <strong>Escape</strong> to close the picture viewer.
            </UserInstruction>
            <Keyboard />
          </InstructionContainer>
          <ScreenshotDescription>{currentImage?.alt}</ScreenshotDescription>
          <ImageContainer>
            {images && (
              <ArrowButton
                $direction="left"
                onClick={() =>
                  onNavigate!(
                    (currentIndex - 1 + images.length) % images.length
                  )
                }
              >
                <PreviousArrow width={50} height={50} />
              </ArrowButton>
            )}
            <Image
              src={currentImage?.imageUrl}
              alt={currentImage?.alt}
              style={{ transform: `scale(${scale})` }}
            />
            {images && (
              <ArrowButton
                $direction="right"
                onClick={() => onNavigate!((currentIndex + 1) % images.length)}
              >
                <NextArrow width={50} height={50} />
              </ArrowButton>
            )}
          </ImageContainer>
          <CloseButton onClick={onClose}>x</CloseButton>
          {images && (
            <ImageInfo>
              {currentIndex + 1}/{images.length}
            </ImageInfo>
          )}
        </ViewerContainer>
      ) : (
        <ViewerContainer $isTablet={true} tabIndex={-1} {...swipeHandlers}>
          <ScreenshotDescription>{currentImage?.alt}</ScreenshotDescription>
          <SwipeInstruction isCertificates={isCertificates} />
          <TransformWrapper
            initialScale={
              isCertificates
                ? isMobile
                  ? 0.5
                  : window.innerHeight * 0.0005
                : isMobile
                ? 0.8
                : 0.5
            }
            minScale={0.15}
            maxScale={2.5}
            wheel={{ step: 0.1 }}
            ref={transformWrapperRef}
            doubleClick={{ disabled: true }}
          >
            <TransformComponent>
              <ImageContainer $isTablet={true}>
                <AnimatePresence mode="wait">
                  <Image
                    key={currentImage?.imageUrl}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    src={currentImage?.imageUrl}
                    alt={currentImage?.alt}
                  />
                </AnimatePresence>
              </ImageContainer>
            </TransformComponent>
          </TransformWrapper>
          <CloseButton onClick={onClose}>x</CloseButton>
          {images && (
            <ImageInfo>
              {currentIndex + 1}/{images.length}
            </ImageInfo>
          )}
        </ViewerContainer>
      )}
    </>
  );
};

export default ImageViewer;
