export const reducers = {
	buka: (state = [], action) =>
	{
		if (action.type === 'BUKA') return action.payload;
		return state;
	}, 
	tmasa: (state = {}, action) =>
	{
		if (action.type === 'TMASA') return action.payload;
		return state;
	}, 
	syozok: (state = null, action) =>
	{
		if (action.type === 'SYOZOK') return action.payload;
		return state;
	}, 
	tokuno: (state = [], action) =>
	{
		if (action.type === 'TOKUNO') return action.payload;
		return state;
	}, 
	groupBy: (state = {}, action) =>
	{
		if (action.type === 'GROUP_BY') return { ...state, ...action.payload };
		return state;
	}, 
};
export default reducers;