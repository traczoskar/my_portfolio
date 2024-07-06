import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openProjectDetails } from "../../../../../slices/projectDetailsSlice";
import styled from "styled-components";

const LinkButton = styled.button`
  border: none;
  background-color: inherit;
  color: inherit;
  font-weight: inherit;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

interface ProjectLinkProps {
  project: {
    label: {
      en: string;
      pl: string;
    };
    image: string;
    route: string;
  };
  children: React.ReactNode;
}

const ProjectLink = ({ project, children }: ProjectLinkProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLinkClick = () => {
    navigate(`/projects/${project.route}`);
    dispatch(openProjectDetails(project.route));
  };

  return <LinkButton onClick={handleLinkClick}>{children}</LinkButton>;
};

export default ProjectLink;
