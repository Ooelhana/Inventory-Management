import Modal from "antd/lib/modal/Modal";

interface AddEmployeeModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

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
        ></Modal>
    );
}
