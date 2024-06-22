import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openProjectDetails } from "../../../../../slices/projectDetailsSlice";
import styled from "styled-components";

const LinkButton = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
  cursor: pointer;
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

  return <LinkButton onClick={handleLinkClick}>{children}</LinkButton>;
};

export default ProjectLink;
