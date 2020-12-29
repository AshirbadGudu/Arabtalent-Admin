import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {List, Button} from 'react-native-paper';
import database from '@react-native-firebase/database';

const JobSeekers = () => {
  const [jobSeekers, setJobSeekers] = useState([]);
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      database()
        .ref(`Users`)
        .on('value', (snapshot) => {
          if (snapshot.exists()) {
            const obj = snapshot.val();
            const jobSeekersArr = [];
            const employersArr = [];
            for (const key in obj) {
              obj[key].user === 'JobSeeker'
                ? jobSeekersArr.push({key, ...obj[key]})
                : employersArr.push({key, ...obj[key]});
            }
            setJobSeekers(jobSeekersArr);
            setEmployers(employersArr);
          }
        });
    };
    fetchUsers();
  }, []);
  return (
    <>
      <List.Section>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={jobSeekers}
          renderItem={({item, index}) => (
            <List.Item
              key={index}
              title={item.job_seeker_name}
              right={(props) => <Button onPress={() => {}}>View</Button>}
            />
          )}
          keyExtractor={(item) => `${item.key}`}
        />
      </List.Section>
    </>
  );
};

export default JobSeekers;
