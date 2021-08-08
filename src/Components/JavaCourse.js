import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const Course = () => {


    return (
        <div>
            <Card>
                <CardContent>
                    <Typography color="textPrimary" gutterBottom>
                        Day 1
                    </Typography>
                    <Typography color="textPrimary" gutterBottom>
                        <ul >
                            <li> Introduction </li>
                            <li>   Setting up workspace </li>
                            <li>   Learning on source controls</li>
                            <li>  Commiting to Git repo</li>
                            <li>  Learning on Maven usage</li>
                            <li>  Deployment</li>
                            <li>  Coding Standards</li>
                            <li>  Coding Environment</li>
                        </ul>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Completed</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default Course;