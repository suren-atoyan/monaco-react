import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.mixins.toolbar.minHeight + 4,
  },
}));

export default useStyles;
