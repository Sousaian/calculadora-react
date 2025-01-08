export const calculate = (num1, operator, num2) => {
    const first = parseFloat(num1);
    const second = parseFloat(num2);
  
    switch (operator) {
      case "+":
        return first + second;
      case "-":
        return first - second;
      case "*":
        return first * second;
      case "/":
        return second !== 0 ? first / second : "Error"; // Evitar divisão por zero
      default:
        return "Error";
    }
  };
  