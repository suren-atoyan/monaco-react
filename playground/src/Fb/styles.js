import { makeStyles } from '@material-ui/core/styles';

export const styles = {
  main: {
    display: 'flex',
  },
  inline: {
    display: 'inline-flex',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyAround: {
    justifyContent: 'space-around',
  },
  justifyEvenly: {
    justifyContent: 'space-evenly',
  },
  grow: {
    flexGrow: 1,
  },
  noGrow: {
    flexGrow: 0,
  },
  shrink: {
    flexShrink: 1,
  },
  noShrink: {
    flexShrink: 0,
  },
  wrap: {
    flexWrap: 'wrap',
  },
  noWrap: {
    flexWrap: 'nowrap',
  },
};

export default makeStyles(styles);
