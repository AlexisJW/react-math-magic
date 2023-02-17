import { useCallback, useState } from 'react';
import '../assets/css/Calculator.css';
import calculate from '../logic/calculate';
import DisplayCalculator from './DisplayCalculator';

function Calculator() {
  const [state, setState] = useState({
    total: '0',
    next: null,
  });

  const handleClick = useCallback(
    (e) => {
      setState((state) => calculate(state, e.target.name));
    },
    [setState],
  );

  const { total, next } = state;
  let result = '0';
  result = next || total;

  return (
    <section id="calculator-section">
      <table>
        <tbody>
          <tr className="result">
            <td>{result}</td>
          </tr>
          <DisplayCalculator handleClick={handleClick} />
        </tbody>
      </table>
    </section>
  );
}

export default Calculator;
