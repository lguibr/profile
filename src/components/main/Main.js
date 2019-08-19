import React from "react"

import Editor from "./editor/Editor"
import Header from "./header/Header"
import MenuBar from "./menuBar/MenuBar"

export default function Main(props) {
    const {
        classes,
        theme,
        handleDrawerToggle,
        open,
        setOpenedFiles,
        files,
        current
    } = props

    console.log(current)

    return (
        <div className={classes.main}>
            <Header classes={classes} handleDrawerToggle={handleDrawerToggle} />

            <MenuBar
                open={open}
                current={current}
                theme={theme}
                classes={classes}
                handleDrawerToggle={handleDrawerToggle}
                setOpenedFiles={setOpenedFiles}
                files={files}
            />

            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Editor current={current} value={` {"teste" : "teste"} `} />
            </main>
        </div>
    )
}
