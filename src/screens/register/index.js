import {View, Text} from 'react-native';
import React, {useState} from 'react';
import TextInputComp from '../../components/TextInputComp';
import ButtonComp from '../../components/ButtonComp';
import {styles} from './styles';
import {setUser} from '../../redux/auth/authSlice';
import {useDispatch} from 'react-redux';

const RegisterScreen = ({navigation, onSignUpSuccess, onSignUpFail}) => {
  // console.log('::::::::::::::::::vcvvz', onSignUpFail);

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signup = async (email, password) => {
    const user = {email, password};
    setUser(user);

    return user;
  };

  const handleSignup = async () => {
    try {
      if (email.trim() === '' || password.trim() === '') {
        console.error('Email and password cannot be empty');
        return;
      }
      console.log('email register ::::', email);
      console.log('password  register :::::', password);

      const userData = await signup(email, password);
      console.log('register userData :::::::', userData);

      dispatch(setUser(userData));
      console.log('Register succesfully');
      // onSignUpSuccess();
    } catch (error) {
      // onSignUpFail();
      console.log(':::::::::::::::::::error', error);
    }
  };

  return (
    <View style={styles.secondview}>
      <View>
        <TextInputComp
          placeholderheading={'Email Address'}
          value={email} // Add this to bind input value
          onChangeText={setEmail} // Add this to update email state
          placeholderColor={'black'}
        />
        <TextInputComp
          placeholderheading={'Password'}
          value={password} // Add this to bind input value
          onChangeText={setPassword} // Add this to update password state
          secureTextEntry // Assuming it's a password field
          placeholderColor={'black'}
        />
      </View>
      <View style={{marginBottom: 30}}>
        <ButtonComp
          onPress={handleSignup}
          btnText={'Signup'}
          btnStyle={styles.loginbtn}
          btntextstyle={styles.btntxt}
        />
      </View>
    </View>
  );
};
//   const dispatch = useDispatch();

//   const handleSignup = async (email, password) => {
//     try {
//       const user = await signUpWithEmailPassword(email, password);

//       dispatch(setUser(user));
//     } catch (error) {}
//   };

//   return (
//     <View style={styles.secondview}>
//       <View>
//         <TextInputComp
//           placeholderheading={'Email Address'}
//           placeholder={'Dosamarvis@gmail.com'}
//           placeholderColor={'black'}
//         />
//         <TextInputComp
//           placeholderheading={'Password'}
//           placeholder={'12345'}
//           placeholderColor={'black'}
//         />
//       </View>
//       <View style={{marginBottom: 30}}>
//         <ButtonComp
//           onPress={handleSignup}
//           btnText={'Signup'}
//           btnStyle={styles.loginbtn}
//           btntextstyle={styles.btntxt}
//         />
//       </View>
//     </View>
//   );
// };

export default RegisterScreen;
