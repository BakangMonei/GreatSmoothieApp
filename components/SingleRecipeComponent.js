import * as React from "react";
import Paper from "@mui/material/Paper";
import BackButtonComponent from "./BackButtonComponent";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function SingleRecipeComponent(props) {
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
			<Card sx={{ width: "100%" }}>
				<CardActionArea>
					<CardMedia
						component="img"
						height="140"
						image={props.singleRecipe.image}
						alt={props.singleRecipe.title}
					/>
					<CardContent>
						<h5>Smoothie Ingredients</h5>
						<Typography variant="body2" color="text.secondary">
							{props.singleRecipe.ingredients}
						</Typography>
						<h5>Smoothie Preparation</h5>
						<Typography variant="body2" color="text.secondary">
							{props.singleRecipe.prepSteps}
						</Typography>
						<p>{props.singleRecipe.date}</p>
					</CardContent>
				</CardActionArea>
			</Card>
		</Paper>
	);
}
