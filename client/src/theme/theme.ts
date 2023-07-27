import {palette} from "./palette.ts";
import {Theme} from "../context/ThemeContext.tsx";

export const themeSettings: any = (mode: string) => {
	const colors = palette(mode);
	return {
		palette: {
			mode: mode,
			...(mode === Theme.DARK
				? {
					primary: {
						main: colors.primary.DEFAULT,
					},
				}
				: {
					primary: {
						main: colors.primary.DEFAULT,
					},
				}),
		},
		typography: {
			fontFamily: ['JetBrains Mono', 'monospace'].join(','),
			fontSize: 20,
			h1: {
				fontSize: 20,
			},
			h2: {
				fontSize: 20,
			},
			h3: {
				fontSize: 60,
			},
			p: {
				fontSize: 14,
			},
		},
		transitions: {
			duration: {
				shortest: 150,
				shorter: 200,
				short: 250,
				// most basic recommended timing
				standard: 300,
				// this is to be used in complex animations
				complex: 375,
				// recommended when something is entering screen
				enteringScreen: 225,
				// recommended when something is leaving screen
				leavingScreen: 195,
			},
		},
	};
};
