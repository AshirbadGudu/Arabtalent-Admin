import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {List, Button} from 'react-native-paper';
import useSkills from '../hooks/useSkills';
import SearchInput, {createFilter} from 'react-native-search-filter';

const SkillsCategory = () => {
  const [skills] = useSkills();
  const [searchTex, setSearchTex] = useState('');
  const filteredSkills = skills.filter(createFilter(searchTex, ['name']));

  return (
    <>
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
            placeholder="Search Skills Here.."
          />
        </View>
      </View>
      <List.Section>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredSkills}
          renderItem={({item, index}) => (
            <List.Item
              key={index}
              title={item.name}
              right={(props) => <Button onPress={() => {}}>View</Button>}
            />
          )}
          keyExtractor={(item) => `${item.key}`}
        />
      </List.Section>
    </>
  );
};

export default SkillsCategory;
const styles = StyleSheet.create({
  searchWarper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
