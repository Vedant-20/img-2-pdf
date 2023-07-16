import React from 'react';

function AddMoreFile({ onFilesChange }) {
  const handleFiles = (event) => {
    const files = event.target.files;
    onFilesChange(files);
  };

  return (
    <div className="add-more-file">
      <div className="inp-cont">
        <input
          id="inp"
          type="file"
          multiple
          onChange={handleFiles}
        />
        <p>
          <i className="fa fa-plus"></i>
        </p>
        <label htmlFor="inp">Add Files</label>
      </div>
    </div>
  );
}

export default AddMoreFile;
