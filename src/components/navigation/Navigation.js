import Drawer from "@material-ui/core/Drawer"
import Hidden from "@material-ui/core/Hidden"
import Divider from "@material-ui/core/Divider"
import List from "@material-ui/core/List"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import MailIcon from "@material-ui/icons/BookmarkBorder"

import React from "react"

const Navigation = props => {
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
                                    {file.files.map((e, i) => {
                                        return (
                                            <div
                                                key={e}
                                                style={{
                                                    width: "100%"
                                                }}
                                            >
                                                <ListItemText
                                                    key={e}
                                                    primary={e}
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
        <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden smUp implementation="css">
                <Drawer
                    variant="temporary"
                    anchor={theme.direction === "rtl" ? "right" : "left"}
                    open={open}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    ModalProps={{
                        keepMounted: true // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>

            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
        </nav>
    )
}

export default Navigation
