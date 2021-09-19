import React from 'react';
import cn from 'classnames';
import s from '../../styles/Label.module.css';

export interface ILabel {
	size?: 's' | 'm' | 'l';
	isBold?: boolean;
	textValue: string;
	classNames?: string;
}

const Label: React.FC<ILabel> = ({ size = 's', isBold, textValue, classNames }) => {
	return <div className={cn(s['fontSize-' + size], classNames)}>{isBold ? <b>{textValue}</b> : textValue}</div>;
};

export default Label;
