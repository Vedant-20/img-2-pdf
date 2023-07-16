import React from 'react';

function Navbar() {
  return (
    <div className="nav">
      <span className="logo">
        <i className="fa fa-file-pdf-o"></i> PDF
      </span>
      <div>
        <button id="convertBtn">SAVE AS PDF</button>
        <button id="download">DOWNLOAD</button>
        <button id="upload-msg" type="button" disabled>
          UPLOAD FILES
        </button>
      </div>
    </div>
  );
}

export default Navbar;
