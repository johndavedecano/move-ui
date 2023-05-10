// @ts-nocheck
import { writable } from 'svelte/store';

const createStore = () => {
	const { subscribe, set, update } = writable([]);

	const generateUniqueId = () => {
		const time = Date.now();
		const randomNumber = Math.random();
		return time.toString() + randomNumber.toString();
	};

	const push = (option = []) => {
		return update((options) => [...options, { ...option, id: generateUniqueId() }]);
	};

	const onPushed = (callback) => {
		const subscription = subscribe((items) => {
			if (Array.isArray(items) && items.length) {
				callback(items[items.length - 1]);
			}
		});
		return subscription;
	};

	const remove = (id) => {
		return update((options) => options.filter((item) => item.id !== id));
	};

	return { subscribe, update, set, push, onPushed, generateUniqueId, remove };
};

export default createStore();
