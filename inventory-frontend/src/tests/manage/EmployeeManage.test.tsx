import { render, screen } from "@testing-library/react";
import EmployeeManage from "../../components/manage/EmployeeManage";

describe("tests employee manage list", () => {
    test("tests that add button exists", () => {
        // Load component
        render(<EmployeeManage employees={[]} />);
        // Check that add button exists
        expect(screen.queryByTestId("add-employee-button")).toBeInTheDocument();
    });

    test("tests that add button opens create employee modal", () => {
        // Load component
        render(<EmployeeManage employees={[]} />);
        // Click add button and check that modal opens up

        const addEmployeeButton = screen.getByTestId("add-employee-button");
        addEmployeeButton.click();
        expect(screen.queryByTestId("add-employee-modal")).toBeDefined();
    });

    test("tests that employees exist on load", async () => {
        // Load component with sample data
        const sampleEmployee: Employee = {
            _id: "123",
            name: "Jim Jenkins",
            __v: "1",
        };
        render(<EmployeeManage employees={[sampleEmployee]} />);

        // Check that employee is correctly rendered in the table
        expect(screen.queryByText("Jim Jenkins")).toBeDefined();
    });

    test("tests that remove employee opens the remove employee modal", () => {});

    test("tests that existing employee is shown on the list", () => {});
});
