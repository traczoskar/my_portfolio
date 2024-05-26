import { useState } from "react";
import { ABOUT } from "../aboutMeData";
import {
  Certificate,
  CertificateContainer,
  CertificateInstructions,
  CourseAdditional,
  CourseDescription,
  CourseInfo,
  CourseOverview,
  CourseTitle,
  EducationContainer,
  EducationItem,
  EducationList,
  EducationName,
  GridDivider,
  Title,
} from "./styled";
import ImageViewer from "../../../common/ImageViewer";

interface ImageState {
  imageUrl: string;
  alt: string;
}

const Education: React.FC = () => {
  const initialImageState: ImageState = {
    imageUrl: "",
    alt: "",
  };

  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<ImageState | null>(
    initialImageState
  );

  const openImageViewer = (imageUrl: string, alt: string) => {
    setCurrentImage({ imageUrl: imageUrl, alt: alt });
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setCurrentImage(null);
    setIsViewerOpen(false);
  };

  return (
    <EducationContainer>
      <Title>Education</Title>
      <EducationList>
        {ABOUT.education.map((course) => (
          <EducationItem key={course.name}>
            <GridDivider>
              <CourseOverview>
                <EducationName>Course</EducationName>
                <CourseTitle>{course.name}</CourseTitle>
                <CourseInfo>
                  <CourseAdditional>
                    <strong>Date of issue:</strong> {course.date}
                  </CourseAdditional>
                  <CourseAdditional>
                    <strong>Organization:</strong> {course.organization}
                  </CourseAdditional>
                </CourseInfo>
                <CourseDescription>{course.content}</CourseDescription>
              </CourseOverview>
              {course.certificate && (
                <CertificateContainer>
                  <Certificate
                    src={course.certificate}
                    alt={`Certificate of completion: ${course.name}`}
                    onClick={() =>
                      openImageViewer(
                        course.certificate!,
                        `Certificate of completion: ${course.name}`
                      )
                    }
                  />
                  <CertificateInstructions>
                    Click on the certificate to view it in full size 🔍
                  </CertificateInstructions>
                </CertificateContainer>
              )}
            </GridDivider>
          </EducationItem>
        ))}
      </EducationList>
      {isViewerOpen && currentImage && (
        <ImageViewer
          image={{
            imageUrl: currentImage.imageUrl,
            alt: currentImage.alt,
          }}
          onClose={closeImageViewer}
        />
      )}
    </EducationContainer>
  );
};

export default Education;
