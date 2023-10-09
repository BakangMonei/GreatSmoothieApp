import * as React from "react";
import Paper from "@mui/material/Paper";
import CloseButtonComponent from "./CloseButtonComponent";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

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

			<div style={{ textAlign: "center" }}>
				<WhatsAppIcon
					style={{ margin: "25 20 20 15" }}
					sx={{ fontSize: "29px" }}
				/>
				<CallIcon style={{ margin: "23 20 20 15" }} sx={{ fontSize: "30px" }} />

				<EmailIcon
					style={{ margin: "25 20 20 15" }}
					sx={{ fontSize: "30px" }}
				/>
			</div>
		</Paper>
	);
}
