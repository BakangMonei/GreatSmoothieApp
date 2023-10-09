import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function SnackBarComponent(props) {
	return (
		<Snackbar
			open={props.open}
			autoHideDuration={3000}
			onClose={props.closeAlert}
		>
			<Alert severity="success" sx={{ width: "100%" }}>
				{props.message}
			</Alert>
		</Snackbar>
	);
}
