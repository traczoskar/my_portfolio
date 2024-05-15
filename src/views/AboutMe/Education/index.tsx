import { Document, Page } from "react-pdf";
import { ABOUT } from "../aboutMeData";
import { EducationContainer, EducationList, Title } from "./styled";

interface EducationProps {
  educationData: typeof ABOUT.education;
}

const Education: React.FC<EducationProps> = ({ educationData }) => {
  return (
    <EducationContainer>
      <Title>Education</Title>
      <EducationList>
        {educationData.map((course) => (
          <div key={course.name}>
            <h3>{course.name}</h3>
            <p>{course.content}</p>
            {course.certificate && (
              <Document file={course.certificate}>
                <Page pageNumber={1} width={150} />
              </Document>
            )}
          </div>
        ))}
      </EducationList>
    </EducationContainer>
  );
};

export default Education;
