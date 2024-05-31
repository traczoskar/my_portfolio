import { AnimatePresence } from "framer-motion";
import { ModalContainer } from "./styled";
import { useSelector } from "react-redux";
import { selectIsLanguageEN } from "../../../slices/languageSlice";

interface ModalMessageProps {
  isCopied: boolean;
}

const ModalMessage: React.FC<ModalMessageProps> = ({ isCopied }) => {
  const isLanguageEN: boolean = useSelector(selectIsLanguageEN);
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
          {isLanguageEN ? "Copied to clipboard ✓" : "Skopiowano do schowka ✓"}
        </ModalContainer>
      )}
    </AnimatePresence>
  );
};

export default ModalMessage;
