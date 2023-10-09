import * as React from "react";
import Paper from "@mui/material/Paper";

export default function SplashComponent(props) {
	return (
		<Paper
			style={{
				display: props.visible,
				padding: 10,
				backgroundColor: "#edb882",
			}}
			sx={{ bottom: 0, left: 0, right: 0, height: "100%" }}
			elevation={4}
		>
			<h2 style={{ textAlign: "center", marginTop: 300 }}>{props.header}</h2>
			<p style={{ textAlign: "center" }}>Unlock a new experience</p>
		</Paper>
	);
}
