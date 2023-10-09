import * as React from "react";
import Paper from "@mui/material/Paper";
import BackButtonComponent from "./BackButtonComponent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SnackBarComponent from "../components/SnackBarComponent";

export default function AddRecipeComponent(props) {
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
			<Box component="form" onSubmit={props.setRecipe} sx={{ mt: 1 }}>
				<label
					id="rImageLabel"
					style={{
						width: "100%",
						marginBottom: 35,
						border: "1px solid #ccc",
						display: "inline-block",
						padding: "12px 12px",
					}}
					htmlFor="rImage"
				>
					Smoothie Photo
				</label>
				<TextField
					style={{ width: "100%", marginTop: 30, marginBottom: 20 }}
					id="title"
					name="title"
					label="Smoothie Name"
					variant="outlined"
					required
				/>
				<TextField
					style={{ width: "100%", marginBottom: 20 }}
					id="ingr"
					name="ingr"
					label="Smoothie Ingredients"
					multiline
					rows={4}
					required
				/>

				<TextField
					style={{ width: "100%", marginBottom: 35 }}
					id="steps"
					name="steps"
					label="Smoothie Preparation"
					multiline
					rows={5}
					required
				/>
				<input
					style={{
						height: 1,
					}}
					id="rImage"
					name="rImage"
					type="file"
					accept="image/*"
					hidden
					onChange={props.showImageName}
				/>

				<Button
					style={{ width: "100%", backgroundColor: "#96938f" }}
					variant="contained"
					type="submit"
				>
					Add Smoothie Recipe
				</Button>
			</Box>
			<SnackBarComponent
				open={props.openAlert}
				message="Successfull"
				closeAlert={props.closeAlert}
			/>
		</Paper>
	);
}
