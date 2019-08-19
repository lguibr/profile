import React from "react"

import Editor from "./editor/Editor"
import Header from "./../header/Header"
import MenuBar from "./menuBar/MenuBar"

import edu from "./../../data/educationalExp"
import pro from "./../../data/proffisionalExp"
import proj from "./../../data/projets"

const allFiles = [edu, pro, proj]

export default function Main(props) {
    const { classes, theme, handleDrawerToggle, open } = props
    return (
        <div className={classes.main}>
            <Header classes={classes} handleDrawerToggle={handleDrawerToggle} />

            <MenuBar
                open={open}
                theme={theme}
                classes={classes}
                handleDrawerToggle={handleDrawerToggle}
                allFiles={allFiles}
            />

            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Editor value={` {"teste" : "teste"} `} />
            </main>
        </div>
    )
}
