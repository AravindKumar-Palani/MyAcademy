import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

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

const JavaPathway = () => {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const history = useHistory();
    return (
        <div className={classes.content}>
            <div>
                <h2> Advanced Java Developer Program</h2>
                <Accordion className={classes.title} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>Languages</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.textContent}>
                        <Typography>
                            <h3>Backend </h3>
                            <ul className={classes.bullets}>
                                <li>JAVA (SE,EE)</li>
                                <li>Spring (Core, MVC)</li>
                                <li>Spring Boot</li>
                                <li>Spring Batch</li>
                                <li>JDBC</li>
                                <li>Hibernate</li>
                                <li>Microservices</li>
                            </ul>

                            <h3>Front End </h3>
                            <ul className={classes.bullets}>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>UI Framework and libraries</li>
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
                        <Typography className={classes.heading}>Databases</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.textContent}>
                        <Typography>
                            <ul className={classes.bullets}>
                                <li>Oracle/SQL</li>
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
                        <Typography className={classes.heading}>Build Management</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.textContent}>
                        <Typography>
                            <ul className={classes.bullets}>
                                <li>Maven</li>
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
                        <Typography className={classes.heading}>Tools</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.textContent}>
                        <Typography>
                            <h3>Source Management</h3>
                            <ul className={classes.bullets}>
                                <li>GIT</li>
                                <li>GITHUB, GITLAB, BITBUCKET</li>
                            </ul>
                            <h3>Jenkins</h3>
                            <h3>Deployment</h3>
                            <ul className={classes.bullets}>
                                <li>ON Prem</li>
                                <li>Cloud - GCP, AWS, AZURE,  HeroKu(Free) </li>
                            </ul>
                            <h3>Postman</h3>
                            <h3>Loggers</h3>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className={classes.title} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>Unit Test cases</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.textContent}>
                        <Typography>
                            <ul className={classes.bullets}>
                                <li>JUnit</li>
                                <li>Mockito</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className={classes.title} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>Need to Know</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.textContent}>
                        <Typography>
                            <ul className={classes.bullets}>
                                <li> Setting up Java workspace</li>
                                <li> Setting up Database</li>
                                <li> maven settings</li>
                                <li> Java decompiler</li>
                                <li> maven building</li>
                                <li> available market alternatives</li>
                                <li> CICD pipeline</li>
                                <li> Agile methodology</li>
                                <li> Project development models</li>
                                <li>Jira</li>
                                <li>Putty</li>
                                <li>Kibana</li>
                                <li>Exception handling</li>
                                <li>Best practises</li>
                                <li>Building rest applications</li>
                                <li>Putty</li>
                                <li>Loggers</li>
                                <li>Microservices</li>
                                <li>.yml, xml configurations</li>
                                <li>Authentication</li>
                                <li>Docker</li>
                                <li>Kubernetes</li>
                                <li>Cloud</li>
                                <li>Selenium</li>
                                <li>Java project architecture</li>
                                <li>Spring Security</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className={classes.registration}>
                <Button variant="contained" color="primary" onClick={() => history.push('/java-course')}>
                    Click here for more details
                </Button>
            </div>
        </div>
    );
};

export default JavaPathway;