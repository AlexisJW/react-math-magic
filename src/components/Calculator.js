import '../assets/css/Calculator.css';

function Calculator() {
  return (
    <section id="calculator-section">
      <table>
        <tbody>
          <tr className="result">
            <td> 0 </td>
          </tr>
          <tr className="row-buttons">
            <td>
              <button className="gray-button" type="button"> AC </button>
            </td>
            <td>
              <button className="gray-button" type="button"> +/- </button>
            </td>
            <td>
              <button className="gray-button" type="button"> % </button>
            </td>
            <td>
              <button className="orange-button" type="button"> / </button>
            </td>
          </tr>
          <tr className="row-buttons">
            <td>
              <button className="gray-button" type="button"> 7 </button>
            </td>
            <td>
              <button className="gray-button" type="button"> 8 </button>
            </td>
            <td>
              <button className="gray-button" type="button"> 9 </button>
            </td>
            <td>
              <button className="orange-button" type="button"> x </button>
            </td>
          </tr>
          <tr className="row-buttons">
            <td>
              <button className="gray-button" type="button"> 4 </button>
            </td>
            <td>
              <button className="gray-button" type="button"> 5 </button>
            </td>
            <td>
              <button className="gray-button" type="button"> 6 </button>
            </td>
            <td>
              <button className="orange-button" type="button"> - </button>
            </td>
          </tr>
          <tr className="row-buttons">
            <td>
              <button className="gray-button" type="button"> 1 </button>
            </td>
            <td>
              <button className="gray-button" type="button"> 2 </button>
            </td>
            <td>
              <button className="gray-button" type="button"> 3 </button>
            </td>
            <td>
              <button className="orange-button" type="button"> + </button>
            </td>
          </tr>
          <tr className="last-row-buttons">
            <td>
              <button className="gray-button" type="button"> 0 </button>
            </td>
            <td>
              <button className="gray-button" type="button"> . </button>
            </td>
            <td>
              <button className="orange-button" type="button"> = </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Calculator;
