import React, { useEffect } from 'react';
import PDFItem from './PDFItem';
import AddMoreFile from './AddMoreFile';
function convertToPDF() {
    const createPDF = document.getElementById('create-pdf');
    createPDF.innerHTML = '';
  
    data.forEach((item) => {
      const fileItem = document.createElement('div');
      // ... (Rest of the code)
  
      createPDF.appendChild(fileItem);
    });
  
    // ... (Rest of the code)
  }
  
function PDFPage({ data, onDelete, onDownload }) {

    useEffect(() => {
        convertToPDF();
      }, [data]);
  return (
    <div className="pdf-page" id="pdf-page">
      <div className="create-pdf" id="create-pdf">
        {data.map((item) => (
          <PDFItem key={item.time} item={item} onDelete={onDelete} />
        ))}
        <AddMoreFile />
      </div>
    </div>
  );
}

export default PDFPage;
