// LoginScreen.js

import { useSelector } from 'react-redux';
// ... other imports

const LoginScreen = ({ navigation }) => {

  // ... other code

  const handleRegistration = () => {
    if (isNewUser) {
      // If the user is new, navigate to the registration screen
      navigation.navigate('RegistrationScreen');
    } else {
      // If the user is not new, proceed with the login logic
      // ...
    }
  };

  // ... rest of your component
};