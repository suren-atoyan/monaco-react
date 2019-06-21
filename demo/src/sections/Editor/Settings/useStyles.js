import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingLeft: 20,
    '& button': {
      marginRight: 10,
    },
  },
  languages: {
    width: '100%',
    marginBottom: 20,
    marginTop: 20,
  },
  title: {
    marginBottom: 10,
    marginTop: 10,
  },
  editor: {
    marginBottom: 12,
    marginTop: 12,
  },
}));

export default useStyles;
