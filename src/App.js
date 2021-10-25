import 'react-native-gesture-handler'
import React from 'react'
import Routes from './Routes'
import {MenuProvider} from 'react-native-popup-menu'
import {AuthProvider} from './context'

const App = () => {
  return (
    <>
      <AuthProvider>
        <MenuProvider>
          <Routes />
        </MenuProvider>
      </AuthProvider>
    </>
  )
}

export default App
