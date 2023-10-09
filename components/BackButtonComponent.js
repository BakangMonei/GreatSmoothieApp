import * as React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BackButtonComponent(props) {
	return (
		<ArrowBackIcon
			onClick={props.action}
			style={{ float: "left", margin: "25 -55 0 30" }}
			sx={{ fontSize: "25px" }}
		/>
	);
}
