import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function RecipeCardComponent(props) {
	return (
		<Card
			id={props.name}
			sx={{ maxWidth: "45%", marginLeft: "5%", marginTop: 5, float: "left" }}
		>
			<CardMedia
				component="img"
				alt={props.name}
				height="100"
				image={props.img}
				id={props.uniq}
				onClick={props.viewRecipe}
			/>
			<CardContent id={props.uniq} onClick={props.viewRecipe}>
				<Typography
					style={{ fontSize: "15px" }}
					gutterBottom
					variant="p"
					component="div"
				>
					{props.name}
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					id={props.uniq}
					onClick={props.deleteRecipe}
					style={{ color: "red", fontSize: "30px" }}
					size="small"
				>
					🚮
				</Button>
				<Button
					id={props.uniq}
					onClick={props.likeRecipe}
					style={{ color: "green", fontSize: "30px" }}
					size="small"
				>
					{props.fav ? "👎🏾" : "👍🏾"}
				</Button>
			</CardActions>
		</Card>
	);
}
