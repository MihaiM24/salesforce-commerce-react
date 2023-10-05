import React, { useState } from "react";
import {
  Flex,
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";

export function Counter() {
const [num1, setNum1] = useState(0);
const [num2, setNum2] = useState(0);
const [operation, setOperation] = useState("+");
const [result, setResult] = useState(0);
const handleNum1Change = (value) => {
    setNum1(value);
    calculateResult(value, num2, operation);
};
const handleNum2Change = (value) => {
    setNum2(value);
    calculateResult(num1, value, operation);
};
const handleOperationChange = (e) => {
    setOperation(e.target.value);
    calculateResult(num1, num2, e.target.value);
};
const calculateResult = (num1, num2, operation) => {
num1 = parseFloat(num1);
num2 = parseFloat(num2);
    switch (operation) {
        case "+":
            setResult(num1 + num2);
            break;
        case "-":
            setResult(num1 - num2);
            break;
        case "*":
            setResult(num1 * num2);
            break;
        case "/":
            setResult(num1 / num2);
            break;
        default:
            setResult(0);
    }
};
const handleClear = () => {
    setNum1(0);
    setNum2(0);
    setOperation("+");
    setResult(0);
};
return (
    <Box p={4}>
        <Heading mb={4} align='center' size='2xl'>Calculator</Heading>
        <Flex direction='row'>
            <NumberInput
                value={num1}
                onChange={handleNum1Change}
                min={0}
                max={100}
                step={1}
                mb={4}
                w='30%'
            >
            <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <NumberInput
                value={num2}
                onChange={handleNum2Change}
                min={0}
                max={100}
                step={1}
                mb={4}
                w='30%'
            >
            <NumberInputField />
            <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
            </NumberInputStepper>
            </NumberInput>
            <Select
                value={operation}
                onChange={handleOperationChange}
                mb={2}
                w='30%'
            >
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </Select>
            <Button colorScheme="blue" onClick={handleClear} mb={4} w='10%'>
                Clear
            </Button>
        </Flex>
        {result !== null && (
        <Heading size ='xl' mt={4} align='center'>{result}</Heading>
        )}
    </Box>
  );
}
