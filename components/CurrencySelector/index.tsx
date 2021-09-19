import React, { useState } from 'react';
import { Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface ITotalPrice {
  onChanged: (value: string) => void;
  currency: string;
}

const CurrencySelector: React.FC<ITotalPrice> = ({currency, onChanged}) => {
  const [value, setValue] = useState(currency);
  const selectionChangeHandler = function (event: SelectChangeEvent<string>): void {
	const selectedValue = event.target.value;
	setValue(selectedValue);
	onChanged(selectedValue);
  };
  return (
	<Select id="currency-selector" value={value} label="Current currency" onChange={selectionChangeHandler}>
	  <MenuItem value={'rubles'}>RUB</MenuItem>
	  <MenuItem value={'euros'}>EUR</MenuItem>
	  <MenuItem value={'dollars'}>USD</MenuItem>
	  <MenuItem value={'pounds'}>GBP</MenuItem>
	  <MenuItem value={'yens'}>JPY</MenuItem>
	</Select>
  );
};

export default CurrencySelector;
