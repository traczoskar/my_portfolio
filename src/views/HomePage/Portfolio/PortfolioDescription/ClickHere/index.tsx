import { AnimatedDiv, Button } from "./styled";
import { ReactComponent as ClickArrow } from "../../../../../assets/click.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedProject } from "../../../../../slices/selectedProjectSlice";
import { useNavigate } from "react-router";
import { openProjectDetails } from "../../../../../slices/projectDetailsSlice";
import { selectIsLanguageEN } from "../../../../../slices/languageSlice";
import { Project } from "../../../../../types/types";

const ClickHere = () => {
  const selectedProject: Project = useSelector(selectSelectedProject);
  const isLanguageEN: boolean = useSelector(selectIsLanguageEN);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLinkClick = () => {
    dispatch(openProjectDetails(selectedProject.route));
    navigate(`/projects/${selectedProject.route}`);
  };
  return (
    <Button onClick={handleLinkClick}>
      <AnimatedDiv>
        <ClickArrow width={22} height={22} />
      </AnimatedDiv>
      {isLanguageEN
        ? "Click here for more details of selected project!"
        : "Kliknij tutaj, aby dowiedzieć się więcej o wybranym projekcie!"}
    </Button>
  );
};

export default ClickHere;
