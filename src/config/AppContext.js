import React, {useContext, useEffect, useReducer, useState} from 'react';
import {Alert, BackHandler, Linking, Platform, Share} from 'react-native';
import auth from '@react-native-firebase/auth';

// Create Context For Application
const AppContext = React.createContext();

// Create Custom Hook For Using The Context Data
export const useAppContext = () => useContext(AppContext);

export const AuthProvider = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [user, setUserDetails] = useState(null);

  const handelShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native Stater | A Stater Template for building react native apps.',
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  const handelExit = () => {
    Alert.alert(
      'Exit App',
      'Are You Sure?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {text: 'OK', onPress: () => BackHandler.exitApp()},
      ],
      {cancelable: true},
    );
  };
  const handelCall = () => {
    const number = '7008614546';
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }
    Linking.openURL(phoneNumber);
  };

  const login = (email, password) => {
    return auth().signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    Alert.alert(
      'Sign Out',
      'Are You Sure?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Log Out',
          onPress: () => {
            setUserDetails(null);
            auth().signOut();
          },
        },
      ],
      {cancelable: true},
    );
  };

  const forgetPassword = (email) => {
    return auth().sendPasswordResetEmail(email);
  };

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        setUserDetails({email: user.email, uid: user.uid});
        setTimeout(() => {
          setLoading(true);
        }, 4000);
      } else {
        setTimeout(() => {
          setLoading(true);
        }, 4000);
      }
    });
  }, []);

  // Context Data That Need In Application
  const value = {
    loading,
    user,
    handelCall,
    handelExit,
    handelShare,
    login,
    logout,
    forgetPassword,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
