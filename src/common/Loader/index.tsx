import { motion } from "framer-motion";
import styled from "styled-components";

const LoadingDot = styled(motion.span)`
  display: block;
  width: 2rem;
  height: 2rem;
  background-color: black;
  border-radius: 50%;
`;

const LoadingContainer = styled(motion.div)`
  width: 10rem;
  height: 5rem;
  display: flex;
  justify-content: space-around;
`;

const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const DotVariants = {
  initial: {
    y: "0%",
  },
  animate: {
    y: "100%",
  },
};

const DotTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut",
};

const Loader: React.FC = () => {
  return (
    <LoadingContainer
      variants={ContainerVariants}
      initial="initial"
      animate="animate"
    >
      <LoadingDot variants={DotVariants} transition={DotTransition} />
      <LoadingDot variants={DotVariants} transition={DotTransition} />
      <LoadingDot variants={DotVariants} transition={DotTransition} />
    </LoadingContainer>
  );
};

export default Loader;
