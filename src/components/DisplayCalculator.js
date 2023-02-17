// uuid is a library to generate an unique identifier
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Button from './Button';
import KeyData from './KeyData';

const KeyCalculator = (props) => {
  const { handleClick } = props;

  return (
    KeyData.map((row, index) => (
      <tr className={`${(index === 4) ? 'last-row-buttons' : 'row-buttons'}`} key={uuidv4()}>
        {row.map((button) => (
          <td key={uuidv4()}>
            <Button
              name={button.name}
              className={button.className}
              onClick={handleClick}
            />
          </td>
        ))}
      </tr>
    ))
  );
};

KeyCalculator.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default KeyCalculator;
