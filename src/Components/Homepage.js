import React from 'react';
import Card from "./chip";
import "../styles/home.css";
import courses from '../Data/course.json';
const Homepage = () => {
    return (

        <div className="cardSection">

            {courses.map(course =>
                <Card course={course} key={course.path}/>
            )
            }
        </div>

    );
};

export default Homepage;