import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import courseDetails from '../Data/days.json';
import "../styles/courseStyles.css";

const CourseCard = () => {

    const details = courseDetails;

    return (
        details.map(detail =>
            <Card key={detail.day} raised={true} className={detail.completedStatus === 'true' ? "completedCourseDetails" : "upcomingCourseDetails"}>
                <CardContent>
                    <Typography color="textPrimary" gutterBottom>
                        {detail.day}
                    </Typography>
                    <Typography color="textPrimary" gutterBottom>
                        <ul >
                            {detail.content.map(lineItems =>
                                <li key={lineItems}> {lineItems} </li>
                            )}
                        </ul>
                    </Typography>
                </CardContent>
            </Card>
        )
    );
};

export default CourseCard;