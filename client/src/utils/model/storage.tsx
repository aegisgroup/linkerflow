export const storage = {
	setItem: (name: string, item: any) => {
		localStorage.setItem(name, JSON.stringify(item));
	},
	getItem: (name: string) => {
		const item = localStorage.getItem(name);

		if (item) {
			return JSON.parse(item);
		}
	},
	removeItem: (name: string) => {
		const item = localStorage.getItem(name);

		if (item) {
			return localStorage.removeItem(name);
		}
	}
}
