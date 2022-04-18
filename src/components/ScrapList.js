import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const ScrapList = ({ partList, deletePart }) => {
  return (
    <List sx={{ marginTop: 2 }}>
      {partList.map(item => {
        return (
          <ListItem divider key={item.cod}>
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
