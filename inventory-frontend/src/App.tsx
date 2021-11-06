import './App.css';

import { ChangeEvent, FormEvent, useState } from 'react';
import { postRecord } from './api/records';

function App() {
  // Record input state
  const [name, setName] = useState<string>("");
  const [employeeName, setEmployeeName] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  // Set the quantity field in the record form
  // Does not decrease below 0
  function onQuantityChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value === "" || e.target.valueAsNumber >= 1) {
      setQuantity(e.target.valueAsNumber)
    }
  }

  // Submit the form and send an API request to create the
  // inventory record in the database
  async function createRecord(e: FormEvent) {
    e.preventDefault();

    await postRecord(name, employeeName, quantity);

    // Reset form state
    setName("");
    setEmployeeName("");
    setQuantity(1);
  
    
  }

  return (
    <form onSubmit={e => createRecord(e)}>
      <div className="new-expense">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required={true}
          />
        </div>
        <div className="new-expense__control">
          <label>Employee Name:</label>
          <input
            type="text"
            min="1"
            value={employeeName}
            onChange={e => setEmployeeName(e.target.value)}
            required={true}
          />
        </div>
        <div className="new-expense__control">
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={e => onQuantityChange(e)}
            required={true}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Inventory Record</button>
      </div>
      </div>
    </form>
  );
}

export default App;
