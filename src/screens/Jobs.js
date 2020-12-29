import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {List, Button} from 'react-native-paper';
import SearchInput, {createFilter} from 'react-native-search-filter';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Topbar from '../components/Topbar';
import database from '@react-native-firebase/database';

const Jobs = (props) => {
  const [jobs, setJobs] = useState([]);
  const [searchTex, setSearchTex] = useState('');
  useEffect(() => {
    const fetchJobs = async () => {
      database()
        .ref(`Jobs`)
        .on('value', (snapshot) => {
          if (snapshot.exists()) {
            const obj = snapshot.val();
            const jobsArr = [];
            for (const key in obj) {
              jobsArr.push({key, ...obj[key]});
            }
            setJobs(jobsArr);
          }
        });
    };
    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter(createFilter(searchTex, ['job_title']));

  return (
    <>
      <Topbar
        title={'Jobs'}
        left={{onPress: () => props.navigation.toggleDrawer()}}
      />
      <View style={styles.searchWarper}>
        <Ionicons.Button
          backgroundColor="transparent"
          name="search"
          color="#333"
          size={24}
        />
        <View style={{width: '100%'}}>
          <SearchInput
            onChangeText={(txt) => setSearchTex(txt)}
            placeholder="Search Post Here.."
          />
        </View>
      </View>

      <List.Section style={{marginBottom: 100}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredJobs}
          renderItem={({item, index}) => (
            <List.Item
              key={index}
              title={item.job_title}
              right={(props) => <Button onPress={() => {}}>View</Button>}
            />
          )}
          keyExtractor={(item) => `${item.key}`}
        />
      </List.Section>
    </>
  );
};

export default Jobs;

const styles = StyleSheet.create({
  searchWarper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
