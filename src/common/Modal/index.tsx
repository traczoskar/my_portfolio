import { useSelector } from "react-redux";
import { selectIsModalOpen } from "../../slices/modalSlice";

const Modal = () => {
  const isOpen: boolean = useSelector(selectIsModalOpen);

  if (!isOpen) return null;

  return (
    <div>
      <h1>Modal</h1>
    </div>
  );
};
