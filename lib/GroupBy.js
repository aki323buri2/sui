import './GroupBy.scss';
import React from 'react';
import Checkbox from './Checkbox';
export default class GroupBy extends React.Component
{
	static defaultProps = {
		groupBy: {}, 
		onChange: (groupBy) => {}, 
	};
	constructor(props)
	{
		super(props);
	}
	render()
	{
		const { groupBy, onChange } = this.props;
		return (
			<div className="group-by">
			{[
				{ value: 'tokuno', label: '得意先' }, 
				{ value: 'center', label: 'センター' }, 
				{ value: 'syaten', label: '店舗' }, 
				{ value: 'shcds' , label: '商品CD' }, 
				{ value: 'utanka', label: '売上単価' }, 
			].map(({ value, label }, i)=>
				<Checkbox key={i}
					label={label}
					checked={groupBy[value]}
					onChange={checked => this.onChange(value, checked)}
				/>
			)}
			</div>
		);
	}
	onChange(value, checked)
	{
		const { groupBy } = this.props;
		this.props.onChange({ ...groupBy, [value]: checked });
	}
};