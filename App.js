import React, { useState } from 'react';

const App = () => {
  const [nodeType, setNodeType] = useState('');
  const [nodeName, setNodeName] = useState('');

  const handleNodeTypeChange = (event) => {
    setNodeType(event.target.value);
  };

  const handleNodeNameChange = (event) => {
    setNodeName(event.target.value);
  };

  const handleUpdate = () => {
    
  };

  const handleDelete = () => {
    // Delete logic goes here
  };

  return (
    <div>
      <label htmlFor="nodeType">Node Type:</label>
      <select id="nodeType" value={nodeType} onChange={handleNodeTypeChange}>
        <option value="">Select Node Type</option>
        <option value="single">Single Node</option>
        <option value="parent">Parent Node</option>
        <option value="child">Child Node</option>
      </select>
      <br/>
      <label htmlFor="selectedNode">Selected Node:</label>
      <input id="selectedNode" type="text" value={nodeName} readOnly/>
      <br/>
      <input type="text" value={nodeName} onChange={handleNodeNameChange} />
      <button onClick={handleUpdate}>Update</button>
      <br/>
      <button onClick={handleDelete}>Delete</button>
      {nodeType === 'single' && (
        <div style={{ marginTop: '10px', border: '1px solid black' }}>
          Single Node Rectangle
        </div>
      )}
      {nodeType === 'parent' && (
        <div style={{ marginTop: '10px', border: '1px solid black' }}>
          Parent Node Rectangle
        </div>
      )}
      {nodeType === 'child' && (
        <div>
          <div style={{ marginTop: '10px', border: '1px solid black' }}>
            Parent Node Rectangle
          </div>
          <div style={{ marginTop: '10px', border: '1px solid black' }}>
            Child Node Rectangle
          </div>
        </div>
      )}
    </div>
  );
};

export default App;