import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import banner from '@assets/Images/landing/banner.webp';
import smoke from '@assets/Images/landing/smoke.webp';

const useStyles = makeStyles(theme => {
  return {
    banner: {
      boxSizing: 'border-box',
      width: '100%',
      minHeight: '100vh',
      overflow: 'hidden',
      background: `url(${banner}) center center/cover no-repeat`,
      backgroundSize: 'cover',
      position: 'relative',
      '&::after': {
        content: "''",
        display: 'block',
        position: 'absolute',
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 1,
        height: 72,
        background: 'linear-gradient(0deg, #121316 0%, transparent 100%)',
      },
    },
    smoke: {
      position: 'absolute',
      width: '100vw',
      height: '100vh',
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 0,
      overflow: 'hidden',
      background: `url(${smoke}) center center/cover no-repeat`,
      backgroundSize: 'cover',
      animation: '$float alternate 30s infinite ease-in-out',
      opacity: 0.65,
    },
    '@keyframes float': {
      '0%': {
        transform: 'translate(3%, -3%) scale(1.2)',
      },
      '50%': {
        transform: 'translate(0, 3%) scale(1.4)',
      },
      '100%': {
        transform: 'translate(-3%, 0) scale(1.2)',
      },
    },
    container: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 1,
      padding: theme.spacing(9),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      maxWidth: '40rem',
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(9, 2),
        maxWidth: 'unset',
        justifyContent: 'flex-end',
      },
    },
    title: {
      fontFamily: 'Cinzel',
      fontSize: 80,
      fontWeight: 400,
      lineHeight: '108px',
      textAlign: 'left',
      color: '#FFFFFFDE',
      padding: theme.spacing(2, 0),
      margin: 0,
      [theme.breakpoints.down('md')]: {
        fontSize: 40,
        lineHeight: '54px',
      },
    },
    description: {
      fontFamily: 'Inter',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '27px',
      color: '#FFFFFF99',
      [theme.breakpoints.down('md')]: {
        fontSize: '0.875rem',
        lineHeight: '24px',
      },
    },
    actions: {
      paddingTop: theme.spacing(2),
      display: 'flex',
      gap: '1rem',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        justifyContent: 'center',
      },
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'stretch',
      },
    },
  };
});

export const LandingBanner = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <div className={classes.container}>
        <h1 className={classes.title}>
          <b>M</b>aster <b>I</b>s
          <span style={{ display: 'block' }}>
            <b>A</b>lways <b>R</b>ight
          </span>
        </h1>
        <p className={classes.description}>
          “Відчиніть важкі двері й крокніть у світ, де немає меж фантазії. Тут,
          серед затаєних таємниць і переповнених небезпеками, ваші персонажі
          почнуть свою епічну подорож.”
        </p>
        <div className={classes.actions}>
          <Button size="medium" href="/calendar">
            Знайти пригоду
          </Button>
          {/* <Button size="large" variant="outlined">
            Замовити гру
          </Button> */}
        </div>
      </div>
      <div className={classes.smoke}></div>
    </div>
  );
};
