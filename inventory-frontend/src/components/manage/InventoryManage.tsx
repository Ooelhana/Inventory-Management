import { useAppSelector } from "../../redux/hooks";
import EmployeeManage from "./EmployeeManage";

export default function InventoryManage() {
    const employees = useAppSelector((state) => state.inventorySlice.employees);

    return (
        <>
            <EmployeeManage employees={employees} />
        </>
    );
}
