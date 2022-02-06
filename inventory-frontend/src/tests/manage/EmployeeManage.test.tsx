import { render, screen } from "@testing-library/react";
import EmployeeManage from "../../components/manage/EmployeeManage";

describe("tests employee manage list", () => {
    beforeEach(() => {
        // Add modal root div for react portal
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

    test("tests that employees exist on load", async () => {
        fetch("http://localhost:8000/employees").then(() => {
            console.log("here");
        });
    });

    test("tests that remove employee opens the remove employee modal", () => {});

    test("tests that existing employee is shown on the list", () => {});
});
