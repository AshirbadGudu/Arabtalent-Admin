import React from 'react';
import database from '@react-native-firebase/database';

const useJobs = () => {
  const [jobs, setJobs] = React.useState([]);
  React.useEffect(() => {
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
  return [jobs];
};

export default useJobs;
