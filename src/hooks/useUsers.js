import React from 'react';
import database from '@react-native-firebase/database';

const useUsers = () => {
  const [jobSeekers, setJobSeekers] = React.useState([]);
  const [employers, setEmployers] = React.useState([]);

  React.useEffect(() => {
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
  return [jobSeekers, employers];
};

export default useUsers;
