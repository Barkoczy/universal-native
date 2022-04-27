import React, { useState, useEffect } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { supabase } from './app/lib/supabase'
import { store } from './app/redux/store'

import WelcomeScreen from './app/screens/WelcomeScreen'
import SignupScreen from './app/screens/SignupScreen'

export default function App() {
  const [auth, setAuth] = useState({})

  useEffect(() => {
    setAuth(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      console.log(session)
      setAuth(session)
    })
  })

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        {auth ? <WelcomeScreen /> : <SignupScreen />}
      </NavigationContainer>
    </ReduxProvider>
  )
}
