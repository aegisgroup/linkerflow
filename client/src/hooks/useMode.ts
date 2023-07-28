import {useMemo} from "react";
import {createTheme} from "@mui/material";
import {themeSettings} from "../theme/theme.ts";
import {useSelector} from "react-redux";
import {palette} from "../theme/palette.ts";

export const useMode = () => {
	const theme = useSelector(state => state.theme.theme);
	const themePalette = palette(theme);
	const themeMode = useMemo(() => createTheme(themeSettings(theme)), [theme]);

	return [themePalette, themeMode]
};
