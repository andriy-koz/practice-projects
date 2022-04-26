import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const ScrapList = props => {
  return (
    <List sx={{ marginTop: 2 }}>
      {props.myList.map(item => {
        return (
          <ListItem
            divider
            key={item.cod}
            onClick={event => props.listItemHandler(event, item)}>
            <ListItemText
              primary={`${item.label} ( ${item.amount} )`}
              secondary={`${item.cod}`}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default ScrapList;
