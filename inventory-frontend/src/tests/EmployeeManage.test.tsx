import { render, screen } from "@testing-library/react";
import AddEmployeeModal from "../components/manage/AddEmployeeModal";
import EmployeeManage from "../components/manage/EmployeeManage";

describe("tests employee manage list", () => {
    beforeEach(() => {
        const modalRoot = document.createElement("div");
        modalRoot.setAttribute("id", "modal-root");
        document.body.appendChild(modalRoot);
    });

    test("tests that add button exists", () => {
        // Load component
        render(<EmployeeManage />);
        // Check that add button exists
        expect(screen.getByTestId("add-employee-button"));
    });

    test("tests that add button opens create employee modal", () => {
        // Load component
        render(<EmployeeManage />);
        // Click add button and check that modal opens up
        const addEmployeeButton = screen.getByTestId("add-employee-button");
        addEmployeeButton.click();
        expect(screen.getByTestId("add-employee-modal"));
    });

    test("tests that adding an employee results in it being added to the list", () => {
        // Load component
        render(<AddEmployeeModal />);
        // Click add button
        // Fill form
        // Add the employee
        // Check that employee was added
    });

    test("tests that trying to add employee without filled out form gives error message", () => {});

    test("tests that employees exist on load", () => {});

    test("tests that existing employee is shown on the list", () => {});

    test("tests that remove employee opens a modal and removes employee from list on confirmation", () => {});
});
