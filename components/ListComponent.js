import * as React from "react";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import RecipeCardComponent from "../components/RecipeCardComponent";
import SnackBarComponent from "../components/SnackBarComponent";

export default function ListComponent(props) {
	return (
		<Paper
			style={{ padding: 10, backgroundColor: props.mode, color: props.oppose }}
			sx={{ bottom: 0, left: 0, right: 0, width: "100%", height: "100%" }}
			elevation={4}
		>
			<div /* style={{ position: "fixed" }} */>
				<h2 style={{ textAlign: "center", paddingTop: 30, paddingBottom: 30 }}>
					Great Smoothie Recipes
				</h2>
				<Stack direction="row" spacing={1} sx={{ marginLeft: "5%" }}>
					{/* <p style={{ marginTop: 5 }}>Filter:</p> */}
					<Chip id="new" label="New" onClick={props.chipClick} />
					<Chip id="old" label="Old" onClick={props.chipClick} />
				</Stack>
			</div>
			{Object.keys(props.recipes).length === 0 ? (
				<h4 style={{ textAlign: "center", paddingTop: 100, paddingBottom: 30 }}>
					No recipes
				</h4>
			) : (
				Object.entries(props.recipes).map(([key, value]) => {
					if (
						props.filter == "All" ||
						props.filter == "New" ||
						props.filter == "Old"
					)
						return (
							<RecipeCardComponent
								key={key}
								uniq={value.date}
								name={value.title}
								img={value.image}
								fav={value.fav}
								deleteRecipe={props.deleteRecipe}
								likeRecipe={props.likeRecipe}
								viewRecipe={props.viewRecipe}
							/>
						);
				})
			)}
			<SnackBarComponent
				open={props.openAlert}
				message="Successfull"
				closeAlert={props.closeAlert}
			/>
		</Paper>
	);
}
