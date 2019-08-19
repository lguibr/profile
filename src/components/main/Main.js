import React from "react"

import Editor from "./editor/Editor"
import Header from "./header/Header"
import MenuBar from "./menuBar/MenuBar"
import { Typography } from "@material-ui/core"

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
                <div
                    style={{
                        height: "24px"
                    }}
                >
                    <Typography
                        variant="subtitle1"
                    >
                        {Object.values(files).map((e, i) => {
                            let name = Object.keys(e)[0]
                            let value = Object.values(e)[0]
                            return value ? name : null
                        })}
                    </Typography>
                </div>
                <Editor current={current} value={` {"teste" : "teste"} `} />
            </main>
        </div>
    )
}
