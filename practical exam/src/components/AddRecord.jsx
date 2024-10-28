import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "../components/style.css";

function AddRecord({ addRecord, updateRecord, records }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [record, setRecord] = useState({ name: '', phone: '', email: '', status: 'active' });

  useEffect(() => {
    if (id && records) {
      const recordToEdit = records.find((rec) => rec.id === Number(id));
      if (recordToEdit) setRecord(recordToEdit);
    }
  }, [id, records]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateRecord(record);
    } else {
      addRecord(record);
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={record.name} onChange={(e) => setRecord({ ...record, name: e.target.value })} />
      </label>
      <button type="submit">{id ? 'Update' : 'Add'} Record</button>
    </form>
  );
}

export default AddRecord;
