import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openProjectDetails } from "../../../../../slices/projectDetailsSlice";

interface ProjectLinkProps {
  project: {
    label: string;
    image: string;
    route: string;
  };
  children: React.ReactNode;
}

const ProjectLink = ({ project, children }: ProjectLinkProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLinkClick = () => {
    dispatch(openProjectDetails(project.route));
    navigate(`/projects/${project.route}`);
  };

  return <a onClick={handleLinkClick}>{children}</a>;
};

export default ProjectLink;
