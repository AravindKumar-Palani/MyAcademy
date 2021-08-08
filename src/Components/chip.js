import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Java from '../images/java_developer.png';
import { useHistory} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    border: 50
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();
const history = useHistory();
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => history.push('/java-pathway')}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={Java}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Java Developer
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A well designed Pathway for Java Developers
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
  );
}
