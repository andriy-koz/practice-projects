import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useEffect, useState } from 'react';

const ScrapList = () => {
  const [myList, setMyList] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      'https://scrap-registry-default-rtdb.firebaseio.com/myList.json'
    );
    const data = await response.json();

    const myListArr = [];

    for (const item in data) {
      myListArr.push({
        cod: item.cod,
        label: item.label,
        amount: item.amount,
        key: item.name,
      });
    }

    setMyList(myListArr);

    console.log(myListArr);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <List sx={{ marginTop: 2 }}>
      {/* {partList.map(item => {
        return (
          <ListItem divider key={item.cod}>
            <ListItemText
              primary={`${item.label} ( ${item.amount} )`}
              secondary={`${item.cod}`}
            />
          </ListItem>
        );
      })} */}
    </List>
  );
};

export default ScrapList;
