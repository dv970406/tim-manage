import CreateUserForm from "../manager/CreateUserForm";
import PortalModal from "../../../../utils/modal/PortalModal";

interface ICreateUserModal {}

const CreateUserModal = ({}: ICreateUserModal) => {
  return (
    <PortalModal modalName="create-user">
      <CreateUserForm />
    </PortalModal>
  );
};

export default CreateUserModal;
