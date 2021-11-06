const url = "http://127.0.0.1:3000";

// Post given record to the database
export async function postRecord(name: string, employee: string, quantity: number) {
    const recordUrl = `${url}/records`;

    const recordBody = {
        name: name,
        employee: employee,
        quantity: quantity
    };

    await fetch(recordUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(recordBody)
    }).then(response => {

    });


}