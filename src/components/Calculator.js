import '../assets/css/Calculator.css';
import React from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

function Button(props) {
  Button.defaultProps = {
    name: '',
    className: '',
    onClick: () => { },
  };

  Button.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
  };

  const { name, className, onClick } = props;

  return (
    <button type="button" name={name} className={className} onClick={onClick}>
      {name}
    </button>
  );
}

function Calculator() {
  const [state, setState] = React.useState({
    total: '0',
    next: null,
  });

  function handleClick(e) {
    setState(calculate(state, e.target.name));
  }

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
          <tr className="row-buttons">
            <td>
              <Button name="AC" className="gray-button" onClick={(e) => handleClick(e)} />
            </td>
            <td>
              <Button name="+/-" className="gray-button" onClick={(e) => handleClick(e)} />
            </td>
            <td>
              <Button name="%" className="gray-button" onClick={(e) => handleClick(e)} />
            </td>
            <td>
              <Button name="÷" className="orange-button" onClick={(e) => handleClick(e)} />
            </td>
          </tr>
          <tr className="row-buttons">
            <td>
              <Button name="7" className="gray-button" onClick={(e) => handleClick(e)} />
            </td>
            <td>
              <Button name="8" className="gray-button" onClick={(e) => handleClick(e)} />
            </td>
            <td>
              <Button name="9" className="gray-button" onClick={(e) => handleClick(e)} />
            </td>
            <td>
              <Button name="x" className="orange-button" onClick={(e) => handleClick(e)} />
            </td>
          </tr>
          <tr className="row-buttons">
            <td>
              <Button name="4" className="gray-button" onClick={(e) => handleClick(e)} />
            </td>
            <td>
              <Button name="5" className="gray-button" onClick={(e) => handleClick(e)} />
            </td>
            <td>
              <Button name="6" className="gray-button" onClick={(e) => handleClick(e)} />
            </td>
            <td>
              <Button name="-" className="orange-button" onClick={(e) => handleClick(e)} />
            </td>
          </tr>
          <tr className="row-buttons">
            <td>
              <Button name="1" className="gray-button" onClick={(e) => handleClick(e)} />
            </td>
            <td>
              <Button name="2" className="gray-button" onClick={(e) => handleClick(e)} />
            </td>
            <td>
              <Button name="3" className="gray-button" onClick={(e) => handleClick(e)} />
            </td>
            <td>
              <Button name="+" className="orange-button" onClick={(e) => handleClick(e)} />
            </td>
          </tr>
          <tr className="last-row-buttons">
            <td>
              <Button name="0" className="gray-button" onClick={(e) => handleClick(e)} />
            </td>
            <td>
              <Button name="." className="gray-button" onClick={(e) => handleClick(e)} />
            </td>
            <td>
              <Button name="=" className="orange-button" onClick={(e) => handleClick(e)} />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Calculator;
