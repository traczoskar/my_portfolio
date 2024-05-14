import { AnimatePresence } from "framer-motion";
import { ModalContainer } from "./styled";

interface ModalMessageProps {
  isCopied: boolean;
}

const ModalMessage: React.FC<ModalMessageProps> = ({ isCopied }) => {
  const modalVariants = {
    hidden: {
      y: "-30px",
      opacity: 0,
    },
    visible: {
      y: "30px",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    exit: {
      y: "-30px",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <AnimatePresence>
      {isCopied && (
        <ModalContainer
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          Copied to clipboard ✓
        </ModalContainer>
      )}
    </AnimatePresence>
  );
};

export default ModalMessage;
