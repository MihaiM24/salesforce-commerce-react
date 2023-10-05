import React from "react";
import { Counter } from "./Counter";
import {useCounter} from "./useCounter"
import { ChakraProvider } from "../../components/shared/ui/index";
function Calculator() {
  return (
  <ChakraProvider>
      <Counter />
  </ChakraProvider>
  
  );
}
export default Calculator;