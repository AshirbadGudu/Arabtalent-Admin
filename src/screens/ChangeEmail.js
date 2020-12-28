import React, {useState} from 'react';
import Topbar from '../components/Topbar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button, TextInput} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS} from '../config/Colors';

const ChangeEmail = (props) => {
  const [email, setEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Topbar
        title="Change Email"
        left={{
          onPress: () => props.navigation.goBack(),
          icon: ({color, size}) => (
            <Ionicons name="arrow-back" size={size} color={color} />
          ),
        }}
      />
      <ScrollView style={{padding: 14}}>
        <TextInput
          style={{marginVertical: 2}}
          mode="outlined"
          label="Email Address"
          keyboardType="email-address"
          value={email}
          onChangeText={(txt) => setEmail(txt)}
        />
        <TextInput
          style={{marginVertical: 2}}
          mode="outlined"
          label="New Email Address"
          keyboardType="email-address"
          value={newEmail}
          onChangeText={(txt) => setNewEmail(txt)}
        />
        <TextInput
          style={{marginVertical: 2}}
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={(txt) => setPassword(txt)}
        />
        <Button
          onPress={() => {}}
          mode="contained"
          style={{marginVertical: 10}}
          color={COLORS.PRIMARY}>
          Update Email
        </Button>
      </ScrollView>
    </>
  );
};

export default ChangeEmail;
