import { motion } from "framer-motion";
import styled from "styled-components";

const LoadingDot = styled(motion.span)`
  display: block;
  width: 1vw;
  height: 1vw;
  transition: background-color 0.3s;
  background-color: ${({ theme }) => theme.colors.textBasic};
  border-radius: 50%;
`;

const LoadingContainer = styled(motion.div)`
  width: 6vw;
  height: auto;
  display: flex;
  justify-content: space-around;
`;

const containerVariants = {
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

const dotVariants = {
  initial: {
    y: "0%",
  },
  animate: {
    y: ["0%", "100%", "0%"],
  },
};

const dotTransition = {
  duration: 1,
  repeat: Infinity,
  ease: "easeInOut",
};

const Loader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <LoadingContainer
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <LoadingDot variants={dotVariants} transition={dotTransition} />
        <LoadingDot variants={dotVariants} transition={dotTransition} />
        <LoadingDot variants={dotVariants} transition={dotTransition} />
      </LoadingContainer>
    </motion.div>
  );
};

export default Loader;
