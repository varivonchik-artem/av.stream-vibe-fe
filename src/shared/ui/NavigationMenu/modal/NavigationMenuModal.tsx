import { Modal } from "@shared/ui/Modal";
import { NavigationMenu } from "@shared/ui/NavigationMenu";
import { navigationMenuItems } from "@widgets/Header/items/navigationMenuItems";

interface NavigationMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NavigationMenuModal = (props: NavigationMenuModalProps) => {
  const { isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <NavigationMenu items={navigationMenuItems} listDirection="column" />
    </Modal>
  );
};
