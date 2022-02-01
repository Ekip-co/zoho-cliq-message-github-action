import { getInput, setOutput, setFailed } from '@actions/core';
import axios from 'axios';

try {
	// `who-to-greet` input defined in action metadata file
	const webhook = getInput('webhook');
	const token = getInput('token');
	const senderName = getInput('sender-name');
	const senderImage = getInput('sender-image');
	const thumbnail = getInput('thumbnail');
	const title = getInput('title');
	const text = getInput('text');
	const theme = getInput('theme');
	const slideType = getInput('slide-type');
	const slideTitle = getInput('slide-title');
	const slideData = getInput('slide-data');
	const customPayload = getInput('custom-payload');

	console.log(`Hello ${nameToGreet}!`);

	let cliqMessage = {
		text: text || '',
		bot: {
			name: senderName || '',
			image: senderImage || '',
		},
		card: {
			title: title || '',
			thumbnail: thumbnail || '',
			theme: theme || 'modern-inline',
		},
	};

	if (slideType && slideData) {
		cliqMessage['slides'] = [
			{
				type: slideType,
				title: slideTitle || '',
				data: JSON.parse(slideData),
			},
		];
	}

	if (customPayload) {
		cliqMessage = JSON.parse(customPayload);
	}

	axios.post(webhook, cliqMessage, {
		params: {
			zapikey: token,
		},
	});

	setOutput('message-json', JSON.stringify(cliqMessage));
} catch (error) {
	setFailed(error.message);
}
