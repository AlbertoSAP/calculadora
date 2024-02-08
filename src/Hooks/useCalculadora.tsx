import { useRef, useState } from "react";

enum Operators {
    addition,
    subtraction,
    multiplication,
    division,
  }
export const useCalculadora = () => { 
    const [numberBase, setNumberBase] = useState('100');
    const [previousNumber, setPreviousNumber] = useState('0');
    const lastOperation = useRef<Operators>();
  
    const clearResult = () => {
      setNumberBase('0');
      setPreviousNumber('0');
    };
  
    const AssaembleNumber = (numberText: string) => {
      // No aceptar doble Punto
      if (numberBase.includes('.') && numberText === '.') return;
  
      if (numberBase.startsWith('0') || numberBase.startsWith('-0')) {
        // primer punto decimal
        if (numberText === '.') {
          setNumberBase(numberBase + numberText);
        }
        // Evaluar si es otro cero y hay un punto
        else if (numberText === '0' && numberBase.includes('.')) {
          setNumberBase(numberBase + numberText);
        }
        // Evaluar si es un numero diferente de Cero y no tiene un punto
        else if (numberText !== '0' && !numberBase.includes('.')) {
          setNumberBase(numberText);
        }
        // Evitar 000.0
        else if (numberText === '0' && !numberBase.includes('.')) {
          setNumberBase(numberBase);
        } else {
          setNumberBase(numberBase + numberText);
        }
      } else {
        setNumberBase(numberBase + numberText);
      }
    };
  
    const PositiveNegative = () => {
      if (numberBase.includes('-')) {
        setNumberBase(numberBase.replace('-', ''));
      } else {
        setNumberBase('-' + numberBase);
      }
    };
  
    const btnDelete = () => {
      let negative = '';
      let temporaryNumber = numberBase;
  
      if (numberBase.includes('-')) {
        negative = '-';
        temporaryNumber = numberBase.substring(1);
      }
      if (temporaryNumber.length > 1) {
        setNumberBase(negative + temporaryNumber.slice(0, -1));
      } else {
        setNumberBase('0');
      }
    };
  
    const changethenumbertoprevious = () => {
      if (numberBase.endsWith('.')) {
        setPreviousNumber(numberBase.slice(0, -1));
      } else {
        setPreviousNumber(numberBase);
      }
  
      setNumberBase('0');
    };
  
    // Operaciones Matematicas
    const btnDivision = () => {
      changethenumbertoprevious();
      lastOperation.current = Operators.division;
    };
  
    const btnMultiplication = () => {
      changethenumbertoprevious();
      lastOperation.current = Operators.multiplication;
    };
  
    const btnSubtraction = () => {
      changethenumbertoprevious();
      lastOperation.current = Operators.subtraction;
    };
  
    const btnAddition = () => {
      changethenumbertoprevious();
      lastOperation.current = Operators.addition;
    };
  
    const calculate = ()=>{
          
      const num1 = Number(numberBase)
      const num2 = Number(previousNumber)
        console.log(num1,num2);
  
      switch (lastOperation.current) {
        case Operators.addition:
          setNumberBase( `${num1 + num2} `)
          // setPreviousNumber('0')
          break;
          case Operators.subtraction:
            setNumberBase( `${num2 - num1} `)
            break;
  33
            case Operators.multiplication:
            setNumberBase( `${num1 * num2} `)
            break;
  
            case Operators.division:
              setNumberBase(`${num2 / num1} `)
            break;

    
      }
    // Despues de cada operacion siempre se va ejecutar que el 
    // numero Anterior quede en cero lo colocamos al final del switch
  //  para que lo ejecute en cada caso
      setPreviousNumber('0')
    }

    return{
        numberBase,
        previousNumber,
        clearResult,
        AssaembleNumber,
        PositiveNegative,
        btnDelete,
        btnAddition,
        btnDivision,
        btnMultiplication,
        btnSubtraction,
        calculate
    }
}
