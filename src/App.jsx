import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FileUploader from './components/FileUploader';
import PDFPage from './components/PDFPage';
import { PDFDocument } from 'pdf-lib';

function App() {
  const [data, setData] = useState([]);

  const handleFilesChange = (files) => {
    const newData = Array.from(files).map((file) => ({
      file,
      fileName: file.name,
      time: new Date().toString() + file.name,
    }));
    setData((prevData) => [...prevData, ...newData]);
  };

  const handleDelete = (time) => {
    setData((prevData) => prevData.filter((item) => item.time !== time));
  };

  const handleDownload = async () => {
    const pdfDoc = await PDFDocument.create();
  
    for (let i = 0; i < data.length; i++) {
      const file = data[i].file;
      const fileName = data[i].fileName;
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
  
      const imageBytes = await new Promise((resolve) => {
        reader.onloadend = () => resolve(new Uint8Array(reader.result));
      });
  
      const image = await pdfDoc.embedJpg(imageBytes);
      const page = pdfDoc.addPage();
  
      // Set page size
      page.setSize(width, height);
  
      // Adjust the position and size of the image as per your requirement
      page.drawImage(image, {
        x: 20,
        y: 50,
        width: page.getWidth() - 40,
        height: page.getHeight() - 100,
      });
    }
  
    const pdfBytes = await pdfDoc.save();
  
    download(pdfBytes, `${pdfName.slice(0, -4)}.pdf`, 'application/pdf');
  };
  

  return (
    <div>
      <Navbar />
      {data.length === 0 ? (
        <FileUploader onFilesChange={handleFilesChange} />
      ) : (
        <PDFPage
          data={data}
          onDelete={handleDelete}
          onDownload={handleDownload}
        />
      )}
    </div>
  );
}

export default App;
