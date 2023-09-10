import { makeStyles } from '@mui/styles';
import Fade from '@mui/material/Fade';
import image from '@assets/Images/loading_indicator.gif';
import clsx from 'clsx';

const useStyles = makeStyles({
  container: {
    height: ({ size }) => size,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export const LoadingIndicator = ({ size = 72, ...props }) => {
  const classes = useStyles({ size });

  return (
    <Fade appear in timeout={440}>
      <div {...props} className={clsx(classes.container, props.className)}>
        <img className={classes.image} src={image} alt="Loading..." />
      </div>
    </Fade>
  );
};
