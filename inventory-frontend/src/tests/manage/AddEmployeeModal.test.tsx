import {
    queryByTestId,
    render,
    screen,
    waitFor,
    waitForElementToBeRemoved,
} from "@testing-library/react";
import AddEmployeeModal from "../../components/manage/AddEmployeeModal";
import EmployeeManage from "../../components/manage/EmployeeManage";

describe("tests add employee modal", () => {
    beforeEach(() => {
        render(<EmployeeManage employees={[]} />);
        const addEmployeeButton = screen.getByTestId("add-employee-button");
        addEmployeeButton.click();
    });
    test("that clicking on cancel closes the modal", async () => {
        const cancelButton = screen.getByTestId("cancel-modal-button");
        cancelButton.click();
        await waitForElementToBeRemoved(screen.queryByText("Cancel"));
    });

    test("tests that adding an employee results in it being added to the list", () => {
        // Load component
        // render(<AddEmployeeModal />);
        // Click add button
        // Fill form
        // Add the employee
        // Check that employee was added
    });

    test("tests that trying to add employee without filled out form gives error message", () => {});
});
