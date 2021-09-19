import React, { useState } from 'react';
import cn from 'classnames';

interface ITotalPrice {
	classNames?: string;
	amount: number;
	currency: string;
}

const TotalPrice: React.FC<ITotalPrice> = ({ classNames, amount, currency }) => {
	return (
		<div className={cn(classNames)}>
		  Total Price: <b>{amount.toFixed(2)}</b> {currency}
		</div>
	);
};

export default TotalPrice;
