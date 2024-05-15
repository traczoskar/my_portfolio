import { ABOUT } from "../aboutMeData";
import {
  Certificate,
  CertificateContainer,
  EducationContainer,
  EducationDate,
  EducationDescription,
  EducationItem,
  EducationList,
  EducationTitle,
  Title,
} from "./styled";

interface EducationProps {
  educationData: typeof ABOUT.education;
}

const Education: React.FC<EducationProps> = ({ educationData }) => {
  return (
    <EducationContainer>
      <Title>Education</Title>
      <EducationList>
        {educationData.map((course) => (
          <EducationItem key={course.name}>
            <EducationTitle>{course.name}</EducationTitle>
            <EducationDescription>{course.content}</EducationDescription>
            <EducationDate>{course.date}</EducationDate>
            {course.certificate && (
              <CertificateContainer>
                <Certificate
                  src={course.certificate}
                  width={200}
                  height={200}
                  alt={course.name}
                />
              </CertificateContainer>
            )}
          </EducationItem>
        ))}
      </EducationList>
    </EducationContainer>
  );
};

export default Education;
