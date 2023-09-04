import { makeStyles } from '@mui/styles';
import { Grid, Card, CardContent } from '@mui/material';

const useStyles = makeStyles(theme => {
  return {
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
    card: {
      backdropFilter: 'blur(4px)',
      backgroundColor: '#B1C5FF1F',
    },
    cardIcon: {
      fontSize: 56,
      fontStyle: 'normal',
    },
    cardTitle: {
      fontFamily: 'Inter',
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: '1.5rem',
      letterSpacing: '-0.019em',
      margin: theme.spacing(2, 0, 0, 0),
    },
    cardDescription: {
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
    key: 'step1',
    icon: `🔍`,
    title: 'Знаходите та реєструєтесь на гру',
    description:
      'Ви можете знайти актуальні ігри на сторінці “Розклад” та ознайомитись з правилами вибраної ігрової системи.',
  },
  {
    key: 'step2',
    icon: `🧙‍♂️`,
    title: "З вами зв'язується майстер",
    description:
      'Ви обговорюєте з майстром деталі, створюєте персонажа та отримуєте базову інформацію, необхідну для гри.',
  },
  {
    key: 'step3',
    icon: `🔮`,
    title: 'Ви приходите на гру і насолоджуєтесь',
    description:
      'У визначний час ви приходите на гру, знайомитесь з командою та поринаєте у захоплюючу пригоду.',
  },
];

export const LandingHowToStart = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h5 className={classes.title}>Як почати грати?</h5>
      <Grid container spacing={3}>
        {SECTIONS.map(section => (
          <Grid key={section.key} item xs={12} lg={4}>
            <Card classes={{ root: classes.card }}>
              <CardContent>
                <i className={classes.cardIcon}>{section.icon}</i>
                <h6 className={classes.cardTitle}>{section.title}</h6>
                <p className={classes.cardDescription}>{section.description}</p>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
