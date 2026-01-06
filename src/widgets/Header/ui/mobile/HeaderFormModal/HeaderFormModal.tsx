import { Modal } from "@shared/ui/Modal";
import { HeaderForm } from "../HeaderForm/HeaderForm";

interface HeaderFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export const HeaderFormModal = (props: HeaderFormModalProps) => {
  const { isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <HeaderForm />
    </Modal>
  );
};
