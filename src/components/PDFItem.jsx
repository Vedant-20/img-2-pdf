import React from 'react';

function PDFItem({ item, onDelete }) {
  const { time, fileName } = item;

  const handleDelete = () => {
    onDelete(time);
  };

  return (
    <div className="file-item">
      <div className="modify">
        <button className="delete-btn" onClick={handleDelete}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
      <div className="img-container">
        <img id="img" src={URL.createObjectURL(item.file)} alt={fileName} />
      </div>
      <p id="img-name">{fileName}</p>
    </div>
  );
}

export default PDFItem;
