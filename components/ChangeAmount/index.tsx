import React, { useState } from 'react';
import { IconButton, Input } from '@mui/material';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import s from '../../styles/ChangeAmount.module.css';
import cn from "classnames";

interface IChangeAmount {
	amount: number;
}

const ChangeAmount: React.FC<IChangeAmount> = ({ amount = 0 }) => {
	const [count, setCount] = useState(amount);
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCount(isNaN(+event?.target?.value) ? +count : +event.target.value);
	};
	const handleReduceClick = () => {
		setCount(count === 0 ? 0 : count - 1);
	};
	const handleAddClick = () => {
		setCount(count + 1);
	};
	return (
	  <div className={cn(s.column, s.container)}>
		<div className={s.label}>Selected quantity</div>
		<div className={cn(s.maxContentHeight, s.row)}>
		  <IconButton aria-label="reduce" onClick={handleReduceClick}>
			<Remove />
		  </IconButton>
		  <Input className={cn(s.amountField)} type="text" value={count} onChange={handleInputChange} />
		  <IconButton aria-label="add" onClick={handleAddClick}>
			<Add />
		  </IconButton>
		</div>
	  </div>

	);
};

export default ChangeAmount;
