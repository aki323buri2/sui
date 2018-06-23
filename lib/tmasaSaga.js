import { put, call, fork, all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { tmasaApiUrl } from './config';
export const tmasaSaga = function *()
{
	yield takeLatest('FETCH_TMASA', fetchTmasa);
	yield put({ type: 'FETCH_TMASA' });
};
export const fetchTmasa = function *(action)
{
	const tmasa = yield all({
		'*': call(tmasaApi, '*'), 
		610: call(tmasaApi, 610), 
		710: call(tmasaApi, 710), 
	});
	yield put({ type: 'TMASA', payload: tmasa });
}
export const tmasaApi = suffix =>
{
	return axios(tmasaApiUrl, { params : {
		suffix, 
		urisaki: true, 
	}}).then(res => res.data);
}
export default tmasaSaga;