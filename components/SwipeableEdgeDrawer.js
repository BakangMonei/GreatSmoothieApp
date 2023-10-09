import * as React from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import LabelBottomNavigation from "../components/LabelBottomNavigation";
import CalculateComponent from "../components/CalculateComponent";
import FavoriteComponent from "../components/FavoriteComponent";
import SettingsComponent from "../components/SettingsComponent";
import ContactComponent from "../components/ContactComponent";
import HelpComponent from "../components/HelpComponent";
import ListComponent from "../components/ListComponent";
import AddRecipeComponent from "../components/AddRecipeComponent";
import SingleRecipeComponent from "../components/SingleRecipeComponent";
import SplashComponent from "../components/SplashComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";

const drawerBleeding = 0;

const Root = styled("div")(({ theme }) => ({
	height: "30%",
	backgroundColor:
		theme.palette.mode === "light"
			? grey[100]
			: theme.palette.background.default,
}));

const Puller = styled(Box)(({ theme }) => ({
	width: 30,
	height: 6,
	backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
	borderRadius: 3,
	position: "absolute",
	top: 8,
	left: "calc(50% - 15px)",
}));

function SwipeableEdgeDrawer(props) {
	const { window } = props;
	const [open, setOpen] = React.useState(true);
	const [drawerHeight, setdrawerHeight] = React.useState(100);
	const [screen, setScreen] = React.useState("Splash");
	const [pullerStatus, setPullerStatus] = React.useState("hidden");
	const [filter, setFilter] = React.useState("Favorites");
	const [recipes, setRecipes] = React.useState({});
	const [refreshTimer, setRefreshTime] = React.useState(0);
	const [key, setKey] = React.useState("recipes");
	const [value, setValue] = React.useState({});
	const [openAlert, setOpenAlert] = React.useState(false);
	const [singleRecipe, setSingleRecipe] = React.useState({});
	const [mode, setMode] = React.useState("#edb882");
	const [oppose, setOppose] = React.useState("#454442");

	React.useEffect(() => {
		getDataObject().then((list) => {
			if (filter == "Old") {
				setRecipes(Object.values(list).reverse());
			} else {
				setRecipes(list);
			}
		});
	}, [filter, refreshTimer]);

	React.useEffect(() => {
		setTimeout(() => setRefreshTime(refreshTimer + 1), 3000);
	});

	React.useEffect(() => {
		storeDataObject();
	}, [value]);

	React.useEffect(() => {
		getDataObject().then((list) => {
			setRecipes(list);
		});
	}, [refreshTimer]);

	React.useEffect(() => {
		setTimeout(() => setOpen(false), 6000);
	}, []);

	const chipClick = (e) => {
		document.getElementById("new").firstChild.removeAttribute("style");
		document.getElementById("old").firstChild.removeAttribute("style");
		e.target.setAttribute("style", "color:white;");
		setFilter(e.target.innerHTML);
	};

	const closeAlert = () => {
		setOpenAlert(false);
	};

	const setRecipe = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		let recipe = {};
		recipe["title"] = data.get("title");
		recipe["ingredients"] = data.get("ingr");
		recipe["prepSteps"] = data.get("steps");
		recipe["fav"] = false;
		recipe["date"] = new Date().toISOString();
		image_to_base64(data.get("rImage")).then((base64Image) => {
			recipe["image"] = base64Image;
			let recipes;
			getDataObject().then((value) => {
				recipes = value;
				if (value != null) {
					recipes[recipe["date"]] = recipe;
				} else {
					recipes = {};
					recipes[recipe["date"]] = recipe;
				}
				setKey("recipes");
				setValue(recipes);
				document.getElementById("title").value = "";
				document.getElementById("ingr").value = "";
				document.getElementById("steps").value = "";
				document.getElementById("rImage").value = "";
				document.getElementById("rImageLabel").innerHTML =
					"Upload Recipe Image";
				setOpenAlert(true);
			});
		});
	};

	const showImageName = (event) => {
		let file = event.target.files[0];
		if (file != undefined) {
			let filename = file.name;
			document.getElementById("rImageLabel").innerHTML = filename;
		} else {
			document.getElementById("rImageLabel").innerHTML = "Upload Recipe Image";
		}
	};

	const image_to_base64 = async (file) => {
		let result_base64 = await new Promise((resolve) => {
			let fileReader = new FileReader();
			fileReader.onload = (e) => resolve(fileReader.result);
			fileReader.onerror = (error) => {
				console.log(error);
			};
			fileReader.readAsDataURL(file);
		});
		return result_base64;
	};

	const deleteRecipe = (event) => {
		setOpenAlert(true);
		getDataObject().then((list) => {
			let id = event.target.id;
			delete list[id];
			setValue(list);
		});
	};

	const likeRecipe = (event) => {
		setOpenAlert(true);
		getDataObject().then((list) => {
			let id = event.target.id;
			list[id].fav = !list[id].fav;
			setValue(list);
		});
	};

	const getDataObject = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem("recipes");
			let list = jsonValue != null ? JSON.parse(jsonValue) : {};
			return list;
		} catch (e) {
			// error reading value
		}
	};

	const storeDataObject = async () => {
		try {
			const jsonValue = JSON.stringify(value);
			await AsyncStorage.setItem(key, jsonValue);
		} catch (e) {
			// saving error
		}
	};

	const calculate = (e) => {
		if (e.target.id == "grams") {
			document.getElementById("pounds").value = (e.target.value / 453.6)
				.toString()
				.slice(0, 5);
			document.getElementById("ounce").value = (e.target.value / 28.35)
				.toString()
				.slice(0, 5);
		} else if (e.target.id == "pounds") {
			document.getElementById("grams").value = (e.target.value * 453.6)
				.toString()
				.slice(0, 5);
			document.getElementById("ounce").value = (e.target.value * 16)
				.toString()
				.slice(0, 5);
		} else if (e.target.id == "ounce") {
			document.getElementById("pounds").value = (e.target.value / 16)
				.toString()
				.slice(0, 5);
			document.getElementById("grams").value = (e.target.value * 28.35)
				.toString()
				.slice(0, 5);
		}
	};

	const toggleDrawerAdvanced = (newOpen, newDrawerHeight, display) => () => {
		setOpen(newOpen);
		setdrawerHeight(newDrawerHeight);
		setScreen(display);
		if (display == "Menu") {
			setPullerStatus("visible");
		} else {
			setPullerStatus("hidden");
		}
	};

	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};

	const viewRecipe = (event) => {
		setOpen(true);
		setdrawerHeight(100);
		setScreen("Recipe");
		setPullerStatus("hidden");
		getDataObject().then((list) => {
			setSingleRecipe(list[event.target.id]);
		});
	};

	const handleChange = (event) => {
		setMode(event.target.value);
		if (event.target.value != "#edb882") {
			setOppose("#fff");
		} else {
			setOppose("#454444");
		}
	};

	// This is used only for the example
	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<>
			<ListComponent
				chipClick={chipClick}
				recipes={recipes}
				deleteRecipe={deleteRecipe}
				likeRecipe={likeRecipe}
				filter={filter}
				openAlert={openAlert}
				closeAlert={closeAlert}
				viewRecipe={viewRecipe}
				mode={mode}
				oppose={oppose}
			/>
			<LabelBottomNavigation
				current={props.current}
				openCalculator={toggleDrawerAdvanced(true, 100, "Calculate")}
				openFavorite={toggleDrawerAdvanced(true, 100, "Favorite")}
				openSettings={toggleDrawerAdvanced(true, 100, "Settings")}
				addNewRecipe={toggleDrawerAdvanced(true, 100, "AddNewRecipe")}
				mode={mode}
				oppose={oppose}
			></LabelBottomNavigation>
			<Root>
				<CssBaseline />
				<Global
					styles={{
						".MuiDrawer-root > .MuiPaper-root": {
							height: `calc(${drawerHeight}% - ${drawerBleeding}px)`,
							overflow: "visible",
						},
					}}
				/>

				<SwipeableDrawer
					container={container}
					anchor="bottom"
					open={open}
					onClose={toggleDrawer(false)}
					onOpen={toggleDrawer(true)}
					swipeAreaWidth={drawerBleeding}
					disableSwipeToOpen={true}
					ModalProps={{
						keepMounted: true,
					}}
				>
					<Puller style={{ visibility: pullerStatus }} />
					<FavoriteComponent
						visible={screen == "Favorite" ? "block" : "none"}
						header="Favorites"
						closeScreen={toggleDrawer(false)}
						modalOpen={open}
						recipes={recipes}
						deleteRecipe={deleteRecipe}
						likeRecipe={likeRecipe}
						openAlert={openAlert}
						closeAlert={closeAlert}
						viewRecipe={viewRecipe}
						mode={mode}
						oppose={oppose}
					/>
					<CalculateComponent
						visible={screen == "Calculate" ? "block" : "none"}
						header="Scales"
						calculate={calculate}
						closeScreen={toggleDrawer(false)}
						mode={mode}
						oppose={oppose}
					/>
					<SettingsComponent
						visible={screen == "Settings" ? "block" : "none"}
						header="Preferences"
						closeScreen={toggleDrawer(false)}
						handleChange={handleChange}
						mode={mode}
						oppose={oppose}
					/>
					<HelpComponent
						visible={screen == "Help" ? "block" : "none"}
						header="Help"
						closeScreen={toggleDrawer(false)}
						mode={mode}
						oppose={oppose}
					/>
					<ContactComponent
						visible={screen == "Contact" ? "block" : "none"}
						header="Feedback"
						closeScreen={toggleDrawer(false)}
						mode={mode}
						oppose={oppose}
					/>
					<AddRecipeComponent
						visible={screen == "AddNewRecipe" ? "block" : "none"}
						header="Add New Recipe"
						closeScreen={toggleDrawer(false)}
						setRecipe={setRecipe}
						showImageName={showImageName}
						closeAlert={closeAlert}
						openAlert={openAlert}
						mode={mode}
						oppose={oppose}
					/>
					<SingleRecipeComponent
						visible={screen == "Recipe" ? "block" : "none"}
						header={singleRecipe ? singleRecipe.title : ""}
						closeScreen={toggleDrawer(false)}
						singleRecipe={singleRecipe}
						mode={mode}
						oppose={oppose}
					/>
					<SplashComponent
						visible={screen == "Splash" ? "block" : "none"}
						header="Smoothies!!!"
						mode={mode}
						oppose={oppose}
					/>
				</SwipeableDrawer>
			</Root>
		</>
	);
}

SwipeableEdgeDrawer.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default SwipeableEdgeDrawer;
