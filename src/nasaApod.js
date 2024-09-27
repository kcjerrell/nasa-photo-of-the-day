import axios from "axios";
import { API_ADDRESS, API_KEY } from "./constants";


export async function getSingleImage(date = null) {
	return await getRequest({ date });
}

/**
 * Today woud be '0', yesterday is -1, a year ago is -365
 *
 * @param {Number} startOffset day offset from now
 * @param {Number} endOffset day offset from now
 * @returns
 */
export async function getRange(startOffset, endOffset = 0) {
	console.log(`range requested: ${startOffset} - ${endOffset}`);
	const startDate = addDays(Date.now(), startOffset);
	const endDate = addDays(Date.now(), endOffset);
	return await getRequest({ endDate, startDate });
}

export async function getRandom(count = 1) {
	return await getRequest({ count });
}

async function getRequest({ date, startDate, endDate, count }) {
	//debugger;
	let url = `${API_ADDRESS}?thumbs=true&api_key=${API_KEY}`;

	if (date)
		url += `&date=${formatDate(date)}`;

	if (endDate)
		url += `&end_date=${formatDate(endDate)}`;

	if (count)
		url += `&count=${count}`;

	if (startDate)
		url += `&start_date=${formatDate(startDate)}`;

	console.log(url);

	let data;

	try {
		const response = await axios.get(url);
		data = response.data;
	} catch (error) {
		console.log(error);
	}

	return data ? data : [];
}

function formatDate(date) {
	//debugger;
	date = new Date(date);
	const year = date.getFullYear();
	const month = date.getMonth().toString().padStart(2,'0');
	const day = date.getDate().toString().padStart(2, '0');

	return `${year}-${month}-${day}`;
}

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}