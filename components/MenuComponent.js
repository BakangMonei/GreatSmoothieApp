import * as React from "react";
import Paper from "@mui/material/Paper";
import Settings from "@mui/icons-material/SettingsOutlined";
import Help from "@mui/icons-material/HelpOutline";
import Textsms from "@mui/icons-material/TextsmsOutlined";

export default function MenuComponent(props) {
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
			<div style={{ textAlign: "center" }}>
				<Textsms
					onClick={props.openContact}
					style={{ margin: "25 20 20 15" }}
					sx={{ fontSize: "29px" }}
				/>
				<Help
					onClick={props.openHelp}
					style={{ margin: "23 20 20 15" }}
					sx={{ fontSize: "30px" }}
				/>

				<Settings
					onClick={props.openSettings}
					style={{ margin: "25 20 20 15" }}
					sx={{ fontSize: "30px" }}
				/>
			</div>
		</Paper>
	);
}
