import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import MenuRoundedIcon from "@material-ui/icons/MenuRounded"
import React from "react"

const Header = (props) => {
    const classes = props.classes
    const handleDrawerToggle = props.handleDrawerToggle
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar style={{ minHeight: "36px" }} variant="dense">
                <MenuRoundedIcon
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                />

                <Typography variant="h6" noWrap>
                    Developer Profile
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header