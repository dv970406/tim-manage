import CreateSurveyForm from "../manager/CreateSurveyForm";
import { MODAL_NAME } from "../../../../utils/constants/modal.constant";
import PortalModal from "../../../../utils/modal/PortalModal";

interface ICreateSurveyModal {}

const CreateSurveyModal = ({}: ICreateSurveyModal) => {
  return (
    <PortalModal modalName={MODAL_NAME.CREATE_SURVEY}>
      <CreateSurveyForm />
    </PortalModal>
  );
};

export default CreateSurveyModal;
