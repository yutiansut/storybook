/* eslint no-underscore-dangle: 0 */

import PropTypes from 'prop-types';
import React from 'react';

const styles = {
  display: 'table-cell',
  boxSizing: 'border-box',
  verticalAlign: 'middle',
  height: '26px',
  width: '100%',
  outline: 'none',
  border: '1px solid #f7f4f4',
  borderRadius: 2,
  fontSize: 11,
  padding: '5px',
  color: '#555',
};

class SelectType extends React.Component {
  _makeOpt(key) {
    return (
      <option key={key} value={key}>
        {key}
      </option>
    );
  }
  _options(values) {
    return Object.keys(values).map(key => this._makeOpt(key));
  }
  render() {
    debugger;
    const { knob, onChange } = this.props;

    return (
      <select
        id={knob.name}
        ref={c => {
          this.input = c;
        }}
        style={styles}
        value={knob.value}
        onChange={e => onChange(e.target.value)}
      >
        {this._options(knob.options)}
      </select>
    );
  }
}

SelectType.defaultProps = {
  knob: {},
  onChange: value => value,
};

SelectType.propTypes = {
  knob: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.any,
  }),
  onChange: PropTypes.func,
};

SelectType.serialize = value => value;
SelectType.deserialize = value => value;

export default SelectType;
