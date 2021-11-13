import 'react-native-gesture-handler'
import React from 'react'
import Routes from './Routes'
import {MenuProvider} from 'react-native-popup-menu'
import {AuthProvider} from './context'

// TODO:
// 1. Profile screens of Admin and Farmer - complete as per requirement
// 2. Store current user in local storage and on opening app, fetch local storage to redirect user to his section
// 3. In Sign Up and Login section we can put keyboard avaoiding view or similar to that. Bcoz plants are coming up when keyboard is showing which obstructs the visibiity og=f form
// 4. Completion of Home Page of Farmer
// 5. Adding animations (during navigation, single field screen, admin portal etc) if have time
// 6. Irrigation Schedule is static. Pls make it dynamic
// 7. Integration of ML Section which will be provided by Tirth Raval
// 8. Currently I have only implemented Create and Read operations. If you feel necessity, add Update and Delete operations

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
