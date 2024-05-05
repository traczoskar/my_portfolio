import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openProjectDetails } from "../../../../../slices/projectDetailsSlice";
import styled from "styled-components";

const Link = styled.a`
  position: relative;
`;
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

  return <Link onClick={handleLinkClick}>{children}</Link>;
};

export default ProjectLink;
