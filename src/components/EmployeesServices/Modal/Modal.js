import "./modal.css";
import Button from "../../Button";
import EmployeeForm from "../Formik/Formik.js";
export default function Modal(props) {
  return (
    <>
      {props.show === true ? (
        <div className="modal" onClick={props.hideModal}>
          {/*CLOSING THE MODAL AT THE CLICK OUTSIDE OF THE MODAL*/}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h4 className="modal-title">{props.titolo}</h4>
            </div>
            <div className="modal-body">
              <EmployeeForm
                hideModal={props.hideModal}
                employeeModify={props.employeeModify}
                modifyEmployeeList={props.modifyEmployeeList}
                filterEmployees={props.filterEmployees}
                action={props.action}
              >
                {props.text}
              </EmployeeForm>
            </div>
            <div className="modal-footer">
              <Button function={props.hideModal} className="button">
                Chiudi
              </Button>
            </div>
            {/*CLOSING THE MODAL*/}
          </div>
        </div>
      ) : null}
    </>
  );
}
