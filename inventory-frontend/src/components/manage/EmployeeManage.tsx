import { Button } from "antd";
import { useState } from "react";
import { createPortal } from "react-dom";
import AddEmployeeModal from "./AddEmployeeModal";

// Add, remove and view employees in the application
export default function EmployeeManage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const rootNode = document.getElementById("modal-root") as HTMLElement;

    // Open the add employee modal after button click
    function addEmployeeButtonHandler() {
        setIsModalOpen(true);
    }

    return (
        <>
            <Button
                data-testid="add-employee-button"
                onClick={addEmployeeButtonHandler}
            >
                Add Employee
            </Button>
            {createPortal(
                <AddEmployeeModal
                    isOpen={isModalOpen}
                    setIsOpen={setIsModalOpen}
                />,
                rootNode
            )}
        </>
    );
}
