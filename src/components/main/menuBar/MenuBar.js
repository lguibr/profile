import React from "react"

import Divider from "@material-ui/core/Divider"
import List from "@material-ui/core/List"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import MailIcon from "@material-ui/icons/BookmarkBorder"

import ResponsiveNav from "./responsiveNav/ResponsiveNav"

const MenuBar = props => {

    const { theme, open, classes, allFiles } = props
    const handleDrawerToggle = props.handleDrawerToggle

    const drawer = (

        <div>
            <div className={classes.toolbar} />
            {allFiles.map((file, fileIndex) => {
                return (
                    <div key={fileIndex}>
                        <List key={fileIndex}>
                            {Object.keys(file).map((groupName, index) => (
                                <div key={groupName}>
                                    <ListItemIcon>
                                        <MailIcon />
                                    </ListItemIcon>
                                    {file.files.map((element, jindex) => {
                                        return (
                                            <div
                                                key={element}
                                                style={{
                                                    width: "100%"
                                                }}
                                            >
                                                <ListItemText
                                                    key={element}
                                                    primary={element}
                                                />
                                            </div>
                                        )
                                    })}
                                </div>
                            ))}
                        </List>
                        <Divider />
                    </div>
                )
            })}
        </div>

    )

    return (

        <ResponsiveNav
            classes={classes}
            theme={theme}
            open={open}
            handleDrawerToggle={handleDrawerToggle}
            drawer={drawer}
        />

    )
}

export default MenuBar
