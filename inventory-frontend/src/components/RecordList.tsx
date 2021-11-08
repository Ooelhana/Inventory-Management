import { useEffect } from "react";
import { getRecords } from "../api/records";
import { useAppSelector } from "../redux/hooks";
import { Table } from "antd";

import "./RecordList.css";

// List all the inventory records currently in the database
export default function RecordList() {
    const records = useAppSelector((state) => state.recordSlice.records);

    // Get records from api and store them in redux state
    useEffect(() => {
        getRecords();
    }, []);

    if (!records) {
        return null;
    }

    // Table Data
    const dataSource = records.map((item) => {
        return {
            key: item._id,
            name: item.name,
            employee: item.employee,
            quantity: item.quantity,
        };
    });

    // Table Columns
    const columns = [
        {
            title: "Item Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Employee",
            dataIndex: "employee",
            key: "employee",
        },
        {
            title: "Quantity",
            dataIndex: "quantity",
            key: "quantity",
        },
    ];

    return (
        <div className="page-component">
            <Table dataSource={dataSource} columns={columns} />
        </div>
    );
}
