// @ts-nocheck
import toastStore from './toast.store';

const defaultOptions = {
	type: 'default',
	position: 'top-right',
	delay: 2500,
	text: '',
	title: undefined,
	showClose: true,
	closeOnClick: true
};

const toast = (option = {}) => {
	toastStore.push({
		...defaultOptions,
		...option
	});
};

export default toast;
