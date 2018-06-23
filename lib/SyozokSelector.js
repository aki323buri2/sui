import './SyozokSelector.scss';
import React from 'react';
import Select from 'react-select';
export default class SyozokSelector extends React.Component 
{
	static defaultProps = {
		buka: [], 
		syozok: null, 
		onChange: value => {}, 	
	};
	render()
	{
		const { buka, syozok, onChange } = this.props;
		this.options = this.toOptions(buka);
		this.value = this.makeValue(syozok);
		return (
			<div className="syozok-selector" style={{ width: 250 }}>
				<Select
					options={this.options}
					value={this.value}
					onChange={this.onChange}
					formatOptionLabel={this.formatOptionLabel}
					maxMenuHeight={400}
				/>
			</div>
		);
	}
	onChange = buka =>
	{
		this.props.onChange(buka.value);
	}
	toOptions(buka)
	{
		return buka.map(buka => ({ ...buka, value: buka.syozok, label: buka.bukm }));
	}
	makeValue(syozok)
	{
		const options = this.options;
		const option = options.find(option => option.syozok === syozok);
		return option;
	}
	formatOptionLabel = (buka, { context, inputValue, selectValue }) =>
	{
		return (
			<div className={`${context}-format`}>
				<div className="value">{buka.value}</div>
				<div className="label">{buka.label}</div>
			</div>
		);
	}
};