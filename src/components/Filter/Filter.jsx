import React from 'react';
import PropTypes from 'prop-types';

export function Filter({ value, onFilter }) {
  return (
    <div>
      <label>
        Find contacts by name
        <input type="text" value={value} onChange={onFilter} />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
