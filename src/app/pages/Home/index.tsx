import React, { useState } from 'react'
import NavBar from 'app/components/core/NavBar'
import Logo from 'app/components/core/Icons/Logo'
import Text from 'app/components/core/Text'
import SideBar from 'app/components/SideBar'
import Terminal from 'app/components/Terminal'
import Editor from 'app/components/core/Editor'

import { Container, Main, Content, FileContainer, BreadCrumb } from './styled'

const Home = props => {
  const { handleEditorValue, value } = props

  return (
    <Container>
      <NavBar>
        <Logo height={30} />
        <Text>Profile 3.0</Text>
      </NavBar>
      <Main>
        <SideBar handleEditorValue={handleEditorValue} />
        <Content>
          <BreadCrumb>BreadCrumb</BreadCrumb>
          <FileContainer>
            <Editor value={value} />
          </FileContainer>
          <Terminal />
        </Content>
      </Main>
    </Container>
  )
}

export default Home
