import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const ScrapList = ({ partList }) => {
  return (
    <List sx={{ marginTop: 2 }}>
      {partList.map(item => {
        return (
          <ListItem
            key={item.cod}
            secondaryAction={
              <IconButton edge='end' aria-label='delete'>
                <DeleteIcon />
              </IconButton>
            }>
            <ListItemText primary={`${item.label} (${item.cod})`} />
            <ListItemText primary={`${item.amount}`} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default ScrapList;
