import CreatePostForm from "./CreatePostForm";
import { MODAL_NAME } from "../../../../utils/constants/modal.constant";
import PortalModal from "../../../../utils/modal/PortalModal";

interface ICreatePostModal {}

const CreatePostModal = ({}: ICreatePostModal) => {
  return (
    <PortalModal modalName={MODAL_NAME.CREATE_POST}>
      <CreatePostForm />
    </PortalModal>
  );
};

export default CreatePostModal;
