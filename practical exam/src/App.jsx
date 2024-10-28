import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddRecord from './components/AddRecord';
import ViewRecords from './components/ViewRecords';

function App() {
  const [records, setRecords] = useState(() => {
    // Fetch records from localStorage on initial load
    const storedRecords = localStorage.getItem('records');
    return storedRecords ? JSON.parse(storedRecords) : [];
  });

  useEffect(() => {
    // Update localStorage whenever records state changes
    localStorage.setItem('records', JSON.stringify(records));
  }, [records]);

  const addRecord = (newRecord) => {
    setRecords((prevRecords) => [
      ...prevRecords,
      { ...newRecord, id: Date.now(), status: 'active' }
    ]);
  };

  const deleteRecord = (id) => {
    setRecords((prevRecords) => prevRecords.filter((record) => record.id !== id));
  };

  const updateRecord = (updatedRecord) => {
    setRecords((prevRecords) =>
      prevRecords.map((record) =>
        record.id === updatedRecord.id ? updatedRecord : record
      )
    );
  };

  const toggleStatus = (ids) => {
    setRecords((prevRecords) =>
      prevRecords.map((record) =>
        ids.includes(record.id)
          ? { ...record, status: record.status === 'active' ? 'inactive' : 'active' }
          : record
      )
    );
  };

  const bulkDelete = (ids) => {
    setRecords((prevRecords) => prevRecords.filter((record) => !ids.includes(record.id)));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ViewRecords
              records={records}
              deleteRecord={deleteRecord}
              toggleStatus={toggleStatus}
              bulkDelete={bulkDelete}
            />
          }
        />
        <Route path="/add" element={<AddRecord addRecord={addRecord} />} />
        <Route
          path="/edit/:id"
          element={<AddRecord records={records} updateRecord={updateRecord} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
