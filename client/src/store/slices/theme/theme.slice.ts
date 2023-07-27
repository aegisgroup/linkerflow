import {createSlice} from '@reduxjs/toolkit';
import {Theme} from '../../../core/enum/theme.ts';
import {storage} from '../../../utils';

interface Props {
	theme: Theme;
}

const initialState: Props = {
	theme: storage.getItem('theme') || Theme.LIGHT,
};

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		changeTheme: (state, action) => {
			if (action.payload === Theme.LIGHT) {
				storage.setItem('theme', Theme.DARK);
				return { ...state, theme: Theme.DARK};
			}
			storage.removeItem('theme');
			return { ...state, theme: Theme.LIGHT};
		},
	},
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
