import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import bg from '@assets/Images/landing/contact-us-bg.webp';

const useStyles = makeStyles(theme => {
  return {
    wrapper: {
      boxSizing: 'border-box',
      width: '100%',
      padding: theme.spacing(18, 9),
      overflow: 'hidden',
      background: `url(${bg}) center center/cover no-repeat`,
      backgroundSize: 'cover',
      position: 'relative',
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
    title: {
      fontFamily: 'Inter',
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: '48px',
      letterSpacing: '-0.019em',
      color: '#FFFFFFDE',
      margin: 0,
    },
    description: {
      fontFamily: 'Inter',
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '28px',
      color: '#FFFFFF99',
      margin: theme.spacing(4, 0),
    },
    telegramButton: {
      backgroundColor: '#B1C5FF1F',
      color: '#B1C5FF',
      border: '1px solid #B1C5FF1F',
      '&:hover': {
        backgroundColor: '#121316',
      },
    },
  };
});

export const LandingContactUs = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <h3 className={classes.title}>Можливо у Вас є питання?</h3>
      <p className={classes.description}>
        Якщо у вас є питання, скарги або пропозиції, можете написати нашій
        магічній кулі в Telegram 🔮
      </p>
      <Button
        endIcon={`🔮`}
        fullWidth={!isSm}
        classes={{ root: classes.telegramButton }}
        target="_blank"
        href="https://t.me/NikikiN1"
      >
        Написати в Telegram
      </Button>
    </div>
  );
};
