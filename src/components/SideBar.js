import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Alert, BackHandler, Share, View} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar, Title, Caption, Drawer} from 'react-native-paper';
import {useAppContext} from '../config/AppContext';

const SideBar = (props) => {
  const {handelExit, user, logout} = useAppContext();
  return (
    <>
      <View
        style={{
          flex: 1,
        }}>
        <DrawerContentScrollView {...props}>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 15,
              paddingLeft: 10,
            }}>
            <Avatar.Image source={require('../assets/icon.png')} size={50} />
            <View style={{marginLeft: 15}}>
              <Title>Admin Panel</Title>
              <Caption>{user.email}</Caption>
            </View>
          </View>
          <Drawer.Section>
            <DrawerItem
              label="Home"
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              onPress={() => props.navigation.navigate('Home')}
            />
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              label="Users"
              icon={({color, size}) => (
                <Icon name="people-outline" color={color} size={size} />
              )}
              onPress={() => props.navigation.navigate('Users')}
            />
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              label="Settings"
              icon={({color, size}) => (
                <Icon name="settings-outline" color={color} size={size} />
              )}
              onPress={() => props.navigation.navigate('Settings')}
            />
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              label="Categories"
              icon={({color, size}) => (
                <Icon name="apps-outline" color={color} size={size} />
              )}
              onPress={() => props.navigation.navigate('CategoryTab')}
            />
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              label="Posted Jobs"
              icon={({color, size}) => (
                <Icon name="add-circle-outline" color={color} size={size} />
              )}
              onPress={() => props.navigation.navigate('Jobs')}
            />
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              label="Reviews"
              icon={({color, size}) => (
                <Icon
                  name="chatbox-ellipses-outline"
                  color={color}
                  size={size}
                />
              )}
              onPress={() => props.navigation.navigate('Reviews')}
            />
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              label="Pricing"
              icon={({color, size}) => (
                <Icon name="pricetags-outline" color={color} size={size} />
              )}
              onPress={() => props.navigation.navigate('Pricing')}
            />
          </Drawer.Section>

          <Drawer.Section>
            <DrawerItem
              label="Exit App"
              icon={({color, size}) => (
                <Icon name="close-outline" color={color} size={size} />
              )}
              onPress={() => handelExit()}
            />
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              label="Sign Out"
              onPress={() => logout()}
              icon={({color, size}) => (
                <Icon name="log-out-outline" color={color} size={size} />
              )}
            />
          </Drawer.Section>
        </DrawerContentScrollView>
      </View>
    </>
  );
};

export default SideBar;
