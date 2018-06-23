import { put, call, fork, takeEvery, takeLatest } from 'redux-saga/effects';
import { select } from 'redux-saga/effects';
import axios from 'axios';
import { bukaApiUrl } from './config.js';
export const bukaSaga = function *()
{
	yield takeLatest('FETCH_BUKA', fetchBuka);
	yield put({ type: 'FETCH_BUKA' });
};
export default bukaSaga;
export const fetchBuka = function *()
{
	const buka = yield call(bukaApi);
	yield put({ type: 'BUKA', payload: buka });
}
export const bukaApi = () =>
{
	return axios(bukaApiUrl).then(res => res.data);
};