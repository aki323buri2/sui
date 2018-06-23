import './TokunoSelector.scss';
import React from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/lib/Creatable';
import classnames from 'classnames';
export default class TokunoSelector extends React.Component
{
	static defaultProps = {
		tmasa: {}, 
		tokuno: [], 
		suffix: '', 
		onChange: (tokuno) => {}, 
	};
	constructor(props)
	{
		super(props);
		this.state = {
			search: '', 
		}
	}
	render()
	{
		const { tmasa, tokuno, suffix, onChange } = this.props;
		const { search } = this.state;
		this.tmasa = this.selectTmasa(tmasa, suffix);
		this.options = this.toOptions(this.tmasa, search);
		this.value = this.toValue(tokuno);
		return (
			<div className="tokuno-selector" style={{ width: '100%' }}>
				<Select
					isMulti
					closeMenuOnSelect={false}
					options={this.options}
					value={this.value}
					onChange={this.onChange}
					formatOptionLabel={this.formatOptionLabel}
					onInputChange={this.onInputChange}
					onMenuClose={this.onMenuClose}
				/>
			</div>
		);
	}
	onChange = tmasa =>
	{
		this.props.onChange(tmasa.map(tmasa => tmasa.value));
	}
	selectTmasa(tmasa, suffix)
	{
		const selected = tmasa[suffix] || tmasa['*'] || [];
		return selected.map(tmasa => ({ ...tmasa, value: tmasa.tokuno, label: tmasa.ryakun }));
	}
	toOptions(tmasa, search)
	{
		const re = search === '' ? /.*/ : new RegExp(search, 'i');
		return tmasa.filter(tmasa =>
		{
			return (
				tmasa.tokuno.toString().match(re) ||
				tmasa.ryakun.toString().match(re) ||
				false
			);
		})
		.slice(0, 20);
	}
	toValue(tokuno)
	{
		return tokuno.map(tokuno =>
		{
			const find = this.tmasa.find(tmasa => tmasa.tokuno === tokuno)
			return find ? find : { value: tokuno };
		});
	}
	formatOptionLabel = (tmasa, { context, inputValue, selectValue }) =>
	{
		return (
			<div className={`${context}-format`}>
				<div className="value">{tmasa.value}</div>
				<div className="label">{tmasa.label}</div>
			</div>
		);	
	}
	onInputChange = (value, { action }) =>
	{
		if (action === 'input-change')
		{
			this.setState({ search: value.trim() });
		}
	}
	onMenuClose = () =>
	{
		this.setState({ search: '' });
	}
};