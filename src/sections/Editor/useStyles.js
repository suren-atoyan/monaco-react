import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: 5,
    'padding-top': 15,
    'margin-bottom': 15,
  },
}));

export default useStyles;
