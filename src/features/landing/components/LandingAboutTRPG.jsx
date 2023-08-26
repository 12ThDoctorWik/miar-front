import { makeStyles } from '@mui/styles';
import about from '@assets/Images/landing/about.webp';

const useStyles = makeStyles(theme => {
  return {
    about: {
      padding: theme.spacing(9, 0),
      display: 'grid',
      gridTemplateColumns: '640px auto',
      gap: '0.5rem',
      [theme.breakpoints.down('md')]: {
        gridTemplateColumns: '1fr',
        padding: theme.spacing(4, 0),
      },
    },
    image: {
      width: '100%',
      maxWidth: 640,
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: theme.spacing(0, 8),
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2),
      },
    },
    title: {
      fontFamily: 'Inter',
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: '48px',
      letterSpacing: '-0.019em',
      textAlign: 'left',
      color: '#FFFFFFDE',
      margin: 0,

      [theme.breakpoints.down('md')]: {
        fontSize: '1.25rem',
        lineHeight: '30px',
        letterSpacing: '-0.019em',
      },
    },
    description: {
      fontFamily: 'Inter',
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '28px',
      letterSpacing: '0em',
      textAlign: 'left',
      color: '#FFFFFF99',
      [theme.breakpoints.down('md')]: {
        fontSize: '0.875rem',
        lineHeight: '24px',
        letterSpacing: '-0.019em',
      },
    },
  };
});

export const LandingAboutTRPG = () => {
  const classes = useStyles();
  return (
    <div className={classes.about}>
      <img src={about} className={classes.image} alt="About TRPG" />
      <div className={classes.content}>
        <h5 className={classes.title}>Що таке настільні рольові ігри?</h5>
        <p className={classes.description}>
          НРІ - це жанр ігор, в яких гравці приймають на себе ролі фантастичних
          або історичних персонажів. У цих іграх великий акцент приділяється
          взаємодії гравців між собою та наративному аспекту.
          <br />
          НРІ часто мають добре розроблений наратив або сюжет, який гравці
          допомагають розгортати. Ігровий майстер або ведучий гри (Game Master
          або Dungeon Master) виступає як фасилітатор, описуючи світ, створюючи
          ситуації та керуючи взаємодією між персонажами та оточуючим світом.
        </p>
      </div>
    </div>
  );
};
