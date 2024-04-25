import React, {useEffect, useState} from 'react';
import Navigation from './src/Navigation';
import SplashScreen from './src/Components/SplashScreen';

function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  useEffect(function () {
    setTimeout(function () {
      setIsSplashVisible(false);
    }, 3000);
  }, []);
  return isSplashVisible ? <SplashScreen /> : <Navigation />;
}

export default App;
