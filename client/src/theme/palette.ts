import {Theme} from "../core/enum/theme.ts";

export const palette = (mode: string) => ({
	...(mode === Theme.DARK
		? {
			primary: {
				DEFAULT: '#0D1117',
				400: '#161B22',
				500: '#FFFFFF',
			},

			accentPrimary: '#FC264D',
			accentSecondary: '#00FF94',
		}
		: {
			primary: {
				DEFAULT: '#B6C7DF',
				400: '#FFFFFF',
				500: '#000000',
			},

			accentPrimary: '#FC264D',
			accentSecondary: '#00FF94',
		}),
});
