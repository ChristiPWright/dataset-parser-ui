import { useCallback, useState, useRef } from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

// Will use this to import the xlsx file
// import { read, writeFileXLSX } from "xlsx";

export default function Importer() {
  const [file, setFile] = useState(null);

  const importFile = useCallback(() => {
    console.log("Importing file");
    console.log(file)

  })

  return (
    <div className="App">
      <header className="App-header">
        <p> Let's import a xlsx file </p>
      </header>
      
      <InputGroup className="mb-3">
        <Form.Control type="file" onChange={(e) => setFile(e.target.files[0])}/>
        <Button 
          variant="outline-secondary" 
          id="button-addon1" 
          onClick={importFile}
        > Import File </Button>
      </InputGroup>
      
    </div>
  );
}
