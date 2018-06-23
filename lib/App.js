import './App.scss';
import React from 'react';
import SyozokSelector from './SyozokSelector';
import TokunoSelector from './TokunoSelector';
import GroupBy from './GroupBy';
import { connect } from 'react-redux';
@connect(state => state)
export default class App extends React.Component
{
	static defaultProps = {
		buka: [], 
		tmasa: {}, 
		syozok: null, 
		tokuno: [],
	};
	constructor(props)
	{
		super(props);
		this.state = {
			checked: true, 
		};
	}
	render()
	{
		const { buka, syozok } = this.props;
		const { tmasa, tokuno } = this.props;
		const { groupBy } = this.props;

		const { dispatch } = this.props;
		const action = (type, payload) => dispatch({ type, payload });

		const suffix = (buka.find(buka => buka.syozok === syozok)||{}).suffix;

		return (
			<div className="app">
				<div className="container">
					<div className="box">
						
						<div className="field">
							<div className="field-title">所属CD : </div>
							<div className="field-body">
								<SyozokSelector
									buka={buka}
									syozok={syozok}
									onChange={syozok => action('SYOZOK', syozok)}
								/>
							</div>
						</div>

						<div className="field">
							<div className="field-title">得意先CD : </div>
							<div className="field-body">
								<TokunoSelector
									tmasa={tmasa}
									tokuno={tokuno}
									suffix={suffix}
									onChange={tokuno => action('TOKUNO', tokuno)}
								/>
							</div>
						</div>

						<div className="field">
							<div className="field-title">集計 : </div>
							<div className="field-body">
								<GroupBy
									groupBy={groupBy}
									onChange={(groupBy) => action('GROUP_BY', groupBy)}
								/>
							</div>
						</div>

					</div>
				</div>
			</div>
		);
	}
};