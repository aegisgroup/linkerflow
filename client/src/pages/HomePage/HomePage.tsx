import {useDispatch, useSelector} from "react-redux";

const HomePage = () => {
	const dispatch = useDispatch();
	const themeMode = useSelector(state => state.theme.theme);
	return (
		<div>
			HomePage
		</div>
	);
};

export default HomePage;
