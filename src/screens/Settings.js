import React from 'react';
import {StyleSheet, ScrollView, View, NativeModules, Share} from 'react-native';

import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Topbar from '../components/Topbar';
import {useAppContext} from '../config/AppContext';

const Settings = (props) => {
  const {logout, handelExit, handelShare} = useAppContext();

  async function handleLogout() {
    try {
      logout();
      NativeModules.DevSettings.reload();
    } catch {
      alert('Failed to log out');
    }
  }
  return (
    <>
      <Topbar
        title="Settings"
        left={{onPress: () => props.navigation.toggleDrawer()}}
      />
      <ScrollView>
        <View style={styles.userInfoSection}>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Avatar.Image source={require('../assets/logo.png')} size={60} />
            <View style={{marginLeft: 15}}>
              <Title>{'Arabtalent Admin Panel'}</Title>
            </View>
          </View>
        </View>
        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Ionicons name="mail" size={20} color="#777" />
            <Text style={{marginLeft: 20, color: '#777'}}>
              {'ashirbadapanigrahi@gmail.com'}
            </Text>
          </View>
        </View>
        <View style={styles.wrapper}>
          <View
            style={[
              styles.infoBox,
              {borderRightColor: '#777', borderRightWidth: 1},
            ]}>
            <Title>0</Title>
            <Caption>Employers</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>0</Title>
            <Caption>Job Seekers</Caption>
          </View>
        </View>
        <View style={styles.menuWrapper}>
          <TouchableRipple
            onPress={() => props.navigation.navigate('ChangeEmail')}>
            <View
              style={[
                styles.row,
                {
                  paddingHorizontal: 30,
                  paddingVertical: 15,
                },
              ]}>
              <Ionicons name="mail-outline" color="blue" size={25} />
              <Text style={{marginLeft: 20, color: '#777', fontSize: 16}}>
                Change Email
              </Text>
            </View>
          </TouchableRipple>
          <TouchableRipple
            onPress={() => props.navigation.navigate('ChangePassword')}>
            <View
              style={[
                styles.row,
                {
                  paddingHorizontal: 30,
                  paddingVertical: 15,
                },
              ]}>
              <Ionicons name="key-outline" color="blue" size={25} />
              <Text style={{marginLeft: 20, color: '#777', fontSize: 16}}>
                Change Password
              </Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={handleLogout}>
            <View
              style={[
                styles.row,
                {
                  paddingHorizontal: 30,
                  paddingVertical: 15,
                },
              ]}>
              <Ionicons name="log-out-outline" color="blue" size={25} />
              <Text style={{marginLeft: 20, color: '#777', fontSize: 16}}>
                Sign Out
              </Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => handelExit()}>
            <View
              style={[
                styles.row,
                {
                  paddingHorizontal: 30,
                  paddingVertical: 15,
                },
              ]}>
              <Ionicons name="close-outline" color="blue" size={25} />
              <Text style={{marginLeft: 20, color: '#777', fontSize: 16}}>
                Exit App
              </Text>
            </View>
          </TouchableRipple>
        </View>
      </ScrollView>
    </>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f5fcff'},
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  wrapper: {
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  menuWrapper: {
    marginTop: 10,
  },
});
