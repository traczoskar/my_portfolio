import { AnimatedDiv, Button } from "./styled";
import { ReactComponent as ClickArrow } from "../../../../../assets/click.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedProject } from "../../../../../slices/selectedProjectSlice";
import { useNavigate } from "react-router";
import { openProjectDetails } from "../../../../../slices/projectDetailsSlice";

const ClickHere = () => {
  const selectedProject = useSelector(selectSelectedProject);
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
      Click here for more details!
    </Button>
  );
};

export default ClickHere;
