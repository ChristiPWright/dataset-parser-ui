import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

// Will use this to import the xlsx file
// import { read, writeFileXLSX } from "xlsx";


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p> Let's import a xlsx file </p>
      </header>
      <InputGroup className="mb-3">
        <Button 
          variant="outline-secondary" 
          id="button-addon1" 
        >
          Import File
        </Button>
        <Form.Control/>
      </InputGroup>
    </div>
  );
}

export default App;
