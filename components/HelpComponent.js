import * as React from "react";
import Paper from "@mui/material/Paper";
import CloseButtonComponent from "./CloseButtonComponent";
import Typography from "@mui/material/Typography";

export default function HelpComponent(props) {
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
			<Typography variant="h6" gutterBottom>
				Heading
			</Typography>
			<Typography variant="body2" gutterBottom>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
				blanditiis tenetur unde suscipit, quam beatae rerum inventore
				consectetur, neque doloribus, cupiditate numquam dignissimos laborum
				fugiat deleniti? Eum quasi quidem quibusdam.
			</Typography>
			<Typography variant="h6" gutterBottom>
				Heading
			</Typography>
			<Typography variant="body2" gutterBottom>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
				blanditiis tenetur unde suscipit, quam beatae rerum inventore
				consectetur, neque doloribus, cupiditate numquam dignissimos laborum
				fugiat deleniti? Eum quasi quidem quibusdam.
			</Typography>
			<Typography variant="h6" gutterBottom>
				Heading
			</Typography>
			<Typography variant="body2" gutterBottom>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
				blanditiis tenetur unde suscipit, quam beatae rerum inventore
				consectetur, neque doloribus, cupiditate numquam dignissimos laborum
				fugiat deleniti? Eum quasi quidem quibusdam.
			</Typography>
		</Paper>
	);
}
