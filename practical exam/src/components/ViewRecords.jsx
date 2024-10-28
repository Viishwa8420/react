import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../components/style.css";

function ViewRecords({ records, deleteRecord, toggleStatus, bulkDelete }) {
  const [selectedIds, setSelectedIds] = useState([]);

  const handleSelect = (id) => {
    setSelectedIds((prevSelected) =>
      prevSelected.includes(id) ? prevSelected.filter((selectedId) => selectedId !== id) : [...prevSelected, id]
    );
  };

  const handleBulkDelete = () => {
    bulkDelete(selectedIds);
    setSelectedIds([]);
  };

  const handleBulkStatus = () => {
    toggleStatus(selectedIds); 
    setSelectedIds([]); 
  };

  return (
    <div>
      <h2>Todo List App</h2>
      <Link to="/add"><button>Add New Record</button></Link>
      <button onClick={handleBulkDelete} disabled={!selectedIds.length}>Delete Selected</button>
      <button onClick={handleBulkStatus} disabled={!selectedIds.length}>Change Status Selected</button>
      <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedIds.includes(record.id)}
                  onChange={() => handleSelect(record.id)}
                />
              </td>
              <td>{record.name}</td>
              <td>
  <button 
    onClick={() => toggleStatus([record.id])}
    className={record.status === 'active' ? 'deactivate-btn' : 'status-btn'}
  >
    {record.status === 'active' ? 'Deactivate' : 'Activate'}
  </button>
</td>
<td>
  <Link to={`/edit/${record.id}`}>
    <button className="edit-btn">Edit</button>
  </Link>
  <button onClick={() => deleteRecord(record.id)} className="deactivate-btn">Delete</button>
</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewRecords;
