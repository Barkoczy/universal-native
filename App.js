import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { supabase } from './app/lib/supabase';

import WelcomeScreen from './app/screens/WelcomeScreen';
import SingupScreen from './app/screens/SingupScreen';

export default function App() {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    setAuth(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      console.log(session)
      setAuth(session);
    })
  });

  return (
    <NavigationContainer>
      {auth ? <WelcomeScreen /> : <SingupScreen />}
    </NavigationContainer>
  );
}
