import { Container, Content, Row } from "./styles";
import Input from "./components/input";
import Button from "./components/button";
import { useState } from "react";
import { calculate } from "./components/Calulation/operations";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber(null);
    setOperation(null);
  };

  const handleSumNumbers = (n) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${n}`);
  };

  const handleSetOperation = (op) => {
    if (firstNumber !== null && operation !== null) {
      const result = calculate(firstNumber, operation, currentNumber);
      setFirstNumber(String(result));
      setCurrentNumber("0");
    } else {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
    }
    setOperation(op); 
  };

  const handleEquals = () => {
    if (firstNumber !== null && operation !== null) {
      const result = calculate(firstNumber, operation, currentNumber);
      setCurrentNumber(String(result)); 
      setFirstNumber(null); 
      setOperation(null); 
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="CE" onClick={handleOnClear} />
          <Button label="/" onClick={() => handleSetOperation("/")} />
          <Button label="*" onClick={() => handleSetOperation("*")} />
          <Button label="=" onClick={handleEquals} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleSumNumbers("7")} />
          <Button label="8" onClick={() => handleSumNumbers("8")} />
          <Button label="9" onClick={() => handleSumNumbers("9")} />
          <Button label="-" onClick={() => handleSetOperation("-")} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleSumNumbers("4")} />
          <Button label="5" onClick={() => handleSumNumbers("5")} />
          <Button label="6" onClick={() => handleSumNumbers("6")} />
          <Button label="+" onClick={() => handleSetOperation("+")} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleSumNumbers("1")} />
          <Button label="2" onClick={() => handleSumNumbers("2")} />
          <Button label="3" onClick={() => handleSumNumbers("3")} />
          <Button label="0" onClick={() => handleSumNumbers("0")} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
