import React from 'react';
import database from '@react-native-firebase/database';

const useSkills = () => {
  const [skills, setSkills] = React.useState([]);
  React.useEffect(() => {
    const fetchSkills = async () => {
      database()
        .ref(`Skills`)
        .on('value', (snapshot) => {
          if (snapshot.exists()) {
            const obj = snapshot.val();
            const skillsArr = [];
            for (const key in obj) {
              skillsArr.push({key, ...obj[key]});
            }
            setSkills(skillsArr);
          }
        });
    };
    fetchSkills();
  }, []);
  return [skills];
};

export default useSkills;
