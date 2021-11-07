import { useEffect } from "react";
import { getRecords } from "../api/records";
import { useAppSelector } from "../redux/hooks";

// List all the inventory records currently in the database
export default function RecordList() {
    const records = useAppSelector((state) => state.recordSlice.records);

    useEffect(() => {
        getRecords();
    }, []);

    return <>{JSON.stringify(records)}</>;
}
