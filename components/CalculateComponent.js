import * as React from "react";
import Paper from "@mui/material/Paper";
import BackButtonComponent from "./BackButtonComponent";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import SnackBarComponent from "../components/SnackBarComponent";

export default function CalculateComponent(props) {
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
				<TextField
					style={{ width: "95%", marginTop: 30, marginBottom: 20 }}
					id="grams"
					name="grams"
					label="Grams"
					type="number"
					sx={{ m: 1, width: "25ch" }}
					onChange={props.calculate}
					InputProps={{
						startAdornment: <InputAdornment position="start">g</InputAdornment>,
					}}
				/>
				<TextField
					style={{ width: "95%", marginTop: 30, marginBottom: 20 }}
					id="pounds"
					name="pounds"
					label="Pounds"
					type="number"
					sx={{ m: 1, width: "25ch" }}
					onChange={props.calculate}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">lb</InputAdornment>
						),
					}}
				/>
				<TextField
					style={{ width: "95%", marginTop: 30, marginBottom: 20 }}
					id="ounce"
					name="ounce"
					label="Ounce"
					type="number"
					sx={{ m: 1, width: "25ch" }}
					onChange={props.calculate}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">oz</InputAdornment>
						),
					}}
				/>
			</Box>
			<SnackBarComponent
				open={props.openAlert}
				message="Successfull"
				closeAlert={props.closeAlert}
			/>
		</Paper>
	);
}
