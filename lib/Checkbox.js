import './Checkbox.scss';
import React from 'react';
export default class Checkbox extends React.Component
{
	static defaultProps = {
		label: '', 
		checked: false, 
		onChange: checked => {}
	};
	render()
	{
		const { label, checked, onChange } = this.props;
		return (
			<div className="checkbox">
				<div className="pretty p-icon p-smooth">
					<input type="checkbox"
						checked={checked}
						onChange={e => onChange(e.target.checked)}
					/>
					<div className="state p-info">
						<i className="icon fas fa-check"></i>
						<label>{label}</label>
					</div>
				</div>
			</div>
		);
	}
};