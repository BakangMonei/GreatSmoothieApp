import * as React from "react";
import Paper from "@mui/material/Paper";
import BackButtonComponent from "./BackButtonComponent";
import RecipeCardComponent from "../components/RecipeCardComponent";

export default function FavoriteComponent(props) {
	return (
		<Paper
			style={{
				display: props.visible,
				padding: 10,
				backgroundColor: props.mode,
				color: props.oppose,
			}}
			sx={{ bottom: 0, left: 0, right: 0, height: "100%" }}
			elevation={4}
		>
			<BackButtonComponent action={props.closeScreen} />
			<h2 style={{ textAlign: "center" }}>{props.header}</h2>
			{Object.keys(props.recipes).length === 0 ? (
				<h4 style={{ textAlign: "center", paddingTop: 100, paddingBottom: 30 }}>
					No favorite recipes
				</h4>
			) : (
				Object.entries(props.recipes).map(([key, value]) => {
					if (value.fav == true)
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
		</Paper>
	);
}
