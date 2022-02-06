import Modal from "antd/lib/modal/Modal";
import { Button } from "antd";

interface AddEmployeeModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

// Modal for adding a new employee
export default function AddEmployeeModal({
    isOpen,
    setIsOpen,
}: AddEmployeeModalProps) {
    // Add the employee
    function addEmployeeHandler() {}

    // Close the modal
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Modal
            data-testid="add-employee-modal"
            visible={isOpen}
            onOk={addEmployeeHandler}
            onCancel={closeModal}
            title={"Add Employee"}
            footer={
                <>
                    <Button
                        data-testid={"cancel-modal-button"}
                        onClick={closeModal}
                    >
                        Cancel
                    </Button>
                    <Button type="primary">Add Employee</Button>
                </>
            }
        ></Modal>
    );
}
