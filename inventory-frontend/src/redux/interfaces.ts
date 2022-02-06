interface Employee {
    _id: string;
    __v: string;
    name: string;
}

interface Item {
    _id: string;
    __v: string;
    name: string;
    quantity: number;
}

interface WithdrawalRecord {
    _id: string;
    __v: string;
    item: Item;
    employee: Employee;
    timestamp: string;
}
