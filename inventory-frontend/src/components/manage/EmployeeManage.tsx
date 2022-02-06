import { Button, Table } from "antd";
import { useState } from "react";
import AddEmployeeModal from "./AddEmployeeModal";

interface EmployeeManageProps {
    employees: Employee[];
}

// Add, remove and view employees in the application
export default function EmployeeManage({ employees }: EmployeeManageProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Open the add employee modal after button click
    function addEmployeeButtonHandler() {
        setIsModalOpen(true);
    }

    const dataSource = employees.map((item) => {
        return { key: item._id, name: item.name };
    });
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
    ];

    return (
        <>
            <Table dataSource={dataSource} columns={columns} />
            <Button
                data-testid="add-employee-button"
                onClick={addEmployeeButtonHandler}
            >
                Add Employee
            </Button>
            <AddEmployeeModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        </>
    );
}
