import { AnimatedDiv, Button } from "./styled";
import { ReactComponent as ClickArrow } from "../../../../../assets/click.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedProject } from "../../../../../slices/selectedProjectSlice";
import { useNavigate } from "react-router";
import { openProjectDetails } from "../../../../../slices/projectDetailsSlice";
import { selectIsLanguageEN } from "../../../../../slices/languageSlice";
import { Project } from "../../../../../types/types";
import { useMediaQuery } from "react-responsive";

const ClickHere = () => {
  const selectedProject: Project = useSelector(selectSelectedProject);
  const isLanguageEN: boolean = useSelector(selectIsLanguageEN);
  const isMobile: boolean = useMediaQuery({
    query: `(max-width: 767px)`,
  });
  const isSmallMobile: boolean = useMediaQuery({
    query: `(max-width: 430px)`,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLinkClick = () => {
    dispatch(openProjectDetails(selectedProject.route));
    navigate(`/projects/${selectedProject.route}`);
  };
  return (
    <Button onClick={handleLinkClick}>
      <AnimatedDiv>
        <ClickArrow
          width={isSmallMobile ? 15 : isMobile ? 18 : 22}
          height={isSmallMobile ? 15 : isMobile ? 18 : 22}
        />
      </AnimatedDiv>
      {isLanguageEN
        ? "Click here for more details of selected project!"
        : "Kliknij tutaj, po więcej szczegółów!"}
    </Button>
  );
};

export default ClickHere;
