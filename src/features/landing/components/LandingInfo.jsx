import { makeStyles } from '@mui/styles';
import info from '@assets/Images/landing/info-bg.webp';
import { LandingForWhom } from './LandingForWhom';
import { LandingHowToStart } from './LandingHowToStart';

const useStyles = makeStyles(theme => {
  return {
    wrapper: {
      boxSizing: 'border-box',
      width: '100%',
      padding: theme.spacing(18, 9),
      overflow: 'hidden',
      background: `url(${info}) center center/cover no-repeat`,
      backgroundSize: 'cover',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(18),
      '&::before': {
        content: "''",
        display: 'block',
        position: 'absolute',
        right: 0,
        top: 0,
        left: 0,
        height: 72,
        zIndex: 1,
        background: 'linear-gradient(0deg, transparent 0%, #121316 100%)',
      },
      '&::after': {
        content: "''",
        display: 'block',
        position: 'absolute',
        right: 0,
        bottom: 0,
        left: 0,
        height: 72,
        zIndex: 1,
        background: 'linear-gradient(0deg, #121316 0%, transparent 100%)',
      },
      [theme.breakpoints.down('md')]: {
        gap: theme.spacing(6),
        padding: theme.spacing(9, 2),
      },
    },
  };
});

export const LandingInfo = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <LandingForWhom />
      <LandingHowToStart />
    </div>
  );
};
