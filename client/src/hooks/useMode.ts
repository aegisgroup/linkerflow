import {useMemo} from "react";
import {createTheme} from "@mui/material";
import {themeSettings} from "../theme/theme.ts";
import {useSelector} from "react-redux";

export const useMode = () => {
	const themeMode = useSelector(state => state.theme.theme);
	return useMemo(() => createTheme(themeSettings(themeMode)), [themeMode]);
};
