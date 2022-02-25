import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ItSkill from '../images/Skill.png';
import { useHistory } from 'react-router-dom';
import "../styles/home.css";



export default function ImgMediaCard(props) {
  const history = useHistory();
  const  {course}= props;
  return (
    <Card className="cardbox">
      <CardActionArea onClick={() => history.push(course.path)}>
        <CardMedia
          component="img"
          height="250"
          image={ItSkill}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {course.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {course.description}
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  );
}
