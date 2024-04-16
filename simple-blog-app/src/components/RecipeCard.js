import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const RecipeCard = ({ recipe }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const styles = {
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9,
      marginTop:'30'
    }
};
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={recipe.title}
        subheader={recipe.date}
      />
      <CardMedia
        image={recipe.image} 
        style={styles.media} 
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {recipe.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            {recipe.method}
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default RecipeCard;
