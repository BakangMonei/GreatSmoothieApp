import * as React from "react";
import CloseButtonComponent from "./CloseButtonComponent";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import SnackBarComponent from "../components/SnackBarComponent";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function SettingsComponent(props) {
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
			<CloseButtonComponent action={props.closeScreen} />
			<h2 style={{ textAlign: "center" }}>{props.header}</h2>
			<Box component="form" onSubmit={props.setRecipe} sx={{ mt: 1 }}>
				<Select
					style={{ width: "95%", marginTop: 30, marginBottom: 20 }}
					sx={{ m: 1, width: "25ch" }}
					labelId="mode-label"
					id="mode"
					value={props.mode}
					label="Display Mode"
					onChange={props.handleChange}
				>
					<MenuItem value="#edb882">Default Mode</MenuItem>
					<MenuItem value="#757371">Night Mode</MenuItem>
					<MenuItem value="#90eef5">Sky Mode</MenuItem>
					<MenuItem value="#f5ee25">Sunflower Mode</MenuItem>
				</Select>
			</Box>
			<SnackBarComponent
				open={props.openAlert}
				message="Successfull"
				closeAlert={props.closeAlert}
			/>
		</Paper>
	);
}
