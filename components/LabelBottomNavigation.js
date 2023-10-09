import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalculateIcon from "@mui/icons-material/Calculate";
import Settings from "@mui/icons-material/SettingsOutlined";
import Paper from "@mui/material/Paper";

export default function LabelBottomNavigation(props) {
	const [pageValue, setPageValue] = React.useState(props.current);

	const handlePageChange = (event, newValue) => {
		if (newValue == "list") {
			setPageValue(newValue);
		}
	};

	return (
		<Paper
			sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
			elevation={4}
		>
			<BottomNavigation value={pageValue} onChange={handlePageChange}>
				<BottomNavigationAction
					value="list"
					icon={
						<AddIcon sx={{ fontSize: "30px" }} onClick={props.addNewRecipe} />
					}
					style={{ backgroundColor: props.mode, color: props.oppose }}
				/>
				<BottomNavigationAction
					label="Favorite"
					value="favorite"
					icon={
						<FavoriteIcon
							onClick={props.openFavorite}
							sx={{ fontSize: "25px" }}
						/>
					}
					style={{ backgroundColor: props.mode, color: props.oppose }}
				/>
				<BottomNavigationAction
					label="Calculate"
					value="calculate"
					icon={
						<CalculateIcon
							onClick={props.openCalculator}
							sx={{ fontSize: "25px" }}
						/>
					}
					style={{ backgroundColor: props.mode, color: props.oppose }}
				/>
				<BottomNavigationAction
					value="settings"
					label="Settings"
					icon={
						<Settings onClick={props.openSettings} sx={{ fontSize: "25px" }} />
					}
					style={{ backgroundColor: props.mode, color: props.oppose }}
				/>
			</BottomNavigation>
		</Paper>
	);
}
