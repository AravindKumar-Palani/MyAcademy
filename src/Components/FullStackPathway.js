import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    content: {
        flexDirection: 'column',

    },
    title: {
        backgroundColor: '#ccd9ff'
    },
    heading: {
        fontSize: theme.typography.pxToRem(20),
        flexBasis: '33.33%',
        flexShrink: 0
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    bullets: {
        listStyleType: 'circle',
    },
    textContent: {
        backgroundColor: 'white'
    },
    registration: {
        display: 'flex',
        padding: '10px 0px',
        flexDirection: 'row-reverse'
    }
}));

const FullStackPathway = () => {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.content}>
            <div>
                <h2> Full Stack Developer Program</h2>
                <Accordion className={classes.title} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>Understanding Basic Concepts - 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.textContent}>
                        <Typography>

                            <ul className={classes.bullets}>
                                <li>Software Application</li>
                                <li>Front End</li>
                                <li>Back End</li>
                                <li>Deployment</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className={classes.title} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>Formulating an Action Plan - 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.textContent}>
                        <Typography>

                            <ul className={classes.bullets}>
                                <li>Requirement Analysis</li>
                                <li>Understanding the tech stacks</li>
                                <li>Creating a Design template</li>
                                <li>Programming Languages used</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className={classes.title} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>Understanding Programming Basics - 3</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.textContent}>
                        <Typography>
                            <h3>Basics to know</h3>
                            <ul className={classes.bullets}>
                                <li>What is a programming Language</li>
                                <li>Exploring different programming languages</li>
                                <li>Comparing different programming languge</li>
                            </ul>
                            <h3>IDE</h3>
                            <h3>Tools</h3>
                            <ul className={classes.bullets}>
                                <li>GIT</li>
                                <li>GITHUB, GITLAB, BITBUCKET</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className={classes.title} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>React JS (Front End) - 10</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.textContent}>
                        <Typography>

                            <h3>HTML</h3>
                            <h3>CSS</h3>
                            <h3>Java Script</h3>
                            <h3>React JS</h3>

                            <ul className={classes.bullets}>
                                <li>What is React?</li>
                                <li>Creating a new Application</li>
                                <li>JSX</li>
                                <li>Components</li>
                                <li>LifeCycle</li>
                                <li>Functional Component</li>
                                <li>Events</li>
                                <li>State and props</li>
                                <li>Routing</li>
                                <li>Axios</li>
                                <li>Redux</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className={classes.title} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>Creating An App - 2</Typography>
                    </AccordionSummary>
                </Accordion>

                <Accordion className={classes.title} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}> Java (Back End) - 15</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.textContent}>
                        <Typography>
                            <h3>Java Basics</h3>
                            <h3>Database connectivity</h3>
                            <h3>Maven</h3>
                            <h3>Application server - tomcat</h3>
                            <h3>Enterprise Application</h3>
                            <h3>Spring</h3>
                            <h3>SpringBoot</h3>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className={classes.title} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>Deploying the App to Cloud- 3</Typography>
                    </AccordionSummary>
                </Accordion>

            </div>
        </div>
    );
};

export default FullStackPathway;