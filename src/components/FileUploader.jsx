import React from 'react';

function FileUploader({ onFilesChange }) {
  const handleFiles = (event) => {
    const files = event.target.files;
    onFilesChange(files);
  };

  return (
    <div className="input-page" id="input-page">
      <div className="choose-file">
        <div className="add-more-files">
          <div className="inp-container">
            <input
              type="file"
              id="upload-file"
              onChange={handleFiles}
              multiple
              accept="image/*"
            />
            <h4 className="drop">DRAG & DROP OR</h4>
            <p>
              <i className="fa fa-file-image-o fa-4x img-icon"></i>
            </p>
            <label htmlFor="upload-file" id="custom-file">
              CHOOSE FILES
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FileUploader;
