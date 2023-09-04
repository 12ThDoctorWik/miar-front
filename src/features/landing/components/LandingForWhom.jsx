import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar,
  Box,
  Chip,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { clsx } from 'clsx';
import forPlayers from '@assets/Images/landing/forPlayers.webp';
import forMasters from '@assets/Images/landing/forMasters.webp';
import forClubs from '@assets/Images/landing/forClubs.webp';

const useStyles = makeStyles(theme => {
  return {
    container: {},
    avatar: {
      border: '3px solid #B1C5FF',
    },
    title: {
      fontFamily: 'Inter',
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: '3rem',
      letterSpacing: '-0.019em',
      margin: theme.spacing(2, 0),
      color: '#FFFFFFDE',
      [theme.breakpoints.down('md')]: {
        fontSize: '1.25rem',
        lineHeight: '1.875rem',
      },
    },
    content: {
      display: 'flex',
      gap: '1.5rem',
      alignItems: 'flex-start',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    },
    accordion: {
      backdropFilter: 'blur(4px)',
      backgroundColor: '#B1C5FF1F',
      width: '100%',
      transition: 'max-width 220ms ease-in-out',
      '&, &:first-of-type, &:last-of-type': {
        borderRadius: 50,
      },
      '&::before': {
        backgroundColor: 'transparent',
      },
      [theme.breakpoints.up('md')]: {
        maxWidth: '25%',
      },
      '&$selectedAccordion': {
        [theme.breakpoints.up('md')]: {
          maxWidth: '50%',
        },
      },
    },
    selectedAccordion: {},
    summary: {
      padding: 0,
      '& $expandedSummary, & .MuiAccordionSummary-content': {
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
      },
    },
    expandedSummary: {},
    cardTitle: {
      fontFamily: 'Inter',
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: '1.5rem',
      letterSpacing: '-0.019em',
      margin: 0,
    },
    details: {
      paddingLeft: 'calc(100px + 2rem)',
      fontFamily: 'Inter',
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.5rem',
      letterSpacing: '0px',
      color: '#FFFFFF99',
      '& > p': {
        margin: 0,
      },
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2, 2, 3, 2),
      },
    },
  };
});

const SECTIONS = [
  {
    key: 'players',
    image: forPlayers,
    title: 'Для Гравців',
    description: (
      <p>
        На цьому порталі ви зможете знайти для себе найцікавіщу пригоду,
        захоплююче провести час і стати частиною НРІ комʼюніті.
        <br />
        Шукате актуальні ігри на сторінці “Розклад”.
        <br />У майбутньому ви зможете замовляти ігри та готуватись до них за
        допомогою навчальних матеріалів на сторінці “Механіки гри”
      </p>
    ),
  },
  {
    key: 'masters',
    image: forMasters,
    title: 'Для Майстрів',
    description: (
      <p>
        Майстер отримує доступ до власного органайзера-календаря з іграми, місце
        для пошуку гравців та зручній комунікації з ними, чудову систему для
        перегляду сесій, зберігання даних про героїв, а також доступ до
        інтерактивних доповнень у вигляді карти чи ведення окремої кампанії
        (останні два пункти наразі в активній розробці, очікуйте згодом)
      </p>
    ),
  },
  {
    key: 'clubs',
    image: forClubs,
    title: 'Для Клубів',
    description: (
      <Box display="flex" alignItems="center" justifyContent="center">
        <Chip color="info" icon={<InfoIcon />} label="В розробці" />
      </Box>
    ),
  },
];

export const LandingForWhom = () => {
  const classes = useStyles();
  const [expandedSection, setExpandedSecrion] = useState('players');
  const [selectedSection, setSelectedSection] = useState('players');

  const handleSelect = key => {
    setExpandedSecrion(null);
    setTimeout(() => {
      setSelectedSection(key);
      setTimeout(() => setExpandedSecrion(key), 220);
    }, 220);
  };

  return (
    <div className={classes.container}>
      <h5 className={classes.title}>Для кого існує цей портал?</h5>
      <div className={classes.content}>
        {SECTIONS.map(section => (
          <Accordion
            key={section.key}
            disableGutters
            className={clsx(classes.accordion, {
              [classes.selectedAccordion]: selectedSection === section.key,
            })}
            expanded={expandedSection === section.key}
            onChange={() => handleSelect(section.key)}
          >
            <AccordionSummary
              classes={{
                root: classes.summary,
                expanded: classes.expandedSummary,
              }}
            >
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                }}
                className={classes.avatar}
                alt={section.title}
                src={section.image}
              />
              <h6 className={classes.cardTitle}>{section.title}</h6>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              {section.description}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};
