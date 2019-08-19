import React from "react"

import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"

import FaceRoundedIcon from "@material-ui/icons/FaceRounded"
import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded"
import WorkRoundedIcon from "@material-ui/icons/WorkRounded"
import BugReportRoundedIcon from "@material-ui/icons/BugReportRounded"
import BorderColorRoundedIcon from "@material-ui/icons/BorderColorRounded"

import ResponsiveNav from "./responsiveNav/ResponsiveNav"

const MenuBar = props => {
    const { theme, open, classes, setOpenedFiles, files, current } = props
    const handleDrawerToggle = props.handleDrawerToggle
    const getFileIcon = fileName => {
        switch (fileName) {
            case "personal":
                return <FaceRoundedIcon />
            case "education":
                return <SchoolRoundedIcon />
            case "professional":
                return <WorkRoundedIcon />
            case "projects":
                return <BorderColorRoundedIcon />
            default:
                return <BugReportRoundedIcon />
        }
    }
    const drawer = (
        <div
            style={{
                display: "flex"
            }}
        >
            <div
                style={{
                    minHeight: "100vh",
                    width: "30px",
                    backgroundColor: "black"
                }}
            >
                <div className={classes.toolbar} />

                <h1>a</h1>
                <h1>b</h1>
                <h1>c</h1>
            </div>
            <div className={classes.toolbar} />
            <div>
                <div>
                    <div className={classes.toolbar} />
                    {files.map((file, fileIndex) => {
                        const fileName = Object.keys(file)[0]
                        const fileValue = Object.values(file)[0]
                        return (
                            <div key={fileIndex}>
                                <List key={fileIndex}>
                                    <ListItem
                                        dense
                                        button
                                        onClick={() => setOpenedFiles(fileName)}
                                        key={file}
                                    >
                                        {fileValue && <p>!</p>}
                                        {fileName === current && <p>!</p>}
                                        <ListItemIcon>
                                            {getFileIcon(fileName)}
                                        </ListItemIcon>
                                        {fileName}
                                    </ListItem>
                                </List>
                            </div>
                        )
                    })}
                </div>
            </div>
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
