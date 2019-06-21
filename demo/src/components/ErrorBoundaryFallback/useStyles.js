import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  wrapper: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    padding: 40,
 
    '& img': {
      width: 'auto',
      height: 25,
    },
    '& h6': {
      paddingLeft: 15,
    },
  },
  buttons: {
    marginTop: 30,
  },
}));

export default useStyles;
