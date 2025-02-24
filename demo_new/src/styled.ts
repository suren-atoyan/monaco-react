import { styled } from '@pigment-css/react';

const Flex = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const Container = styled(Flex)(() => ({
  height: '100vh',
  overflow: 'hidden',
}));

const Header = styled(Flex)(({ theme }) => ({
  flexDirection: 'row',
  paddingLeft: theme.spacing.unit * 3,
  paddingRight: theme.spacing.unit * 3,
  height: 54,
  alignItems: 'center',
  justifyContent: 'space-between',
  boxShadow:
    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
}));

const Body = styled(Flex)(({ theme }) => ({
  padding: theme.spacing.unit * 2,
  flex: 1,
  overflowY: 'auto',
  overflowX: 'hidden',
}));

const Button = styled('button')(({ theme }) => ({
  padding: theme.spacing.unit,
  border: '1px solid',
  cursor: 'pointer',
  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  backgroundColor: 'transparent',
  color: theme.colors.onPrimary,
  height: 32,
  borderRadius: 6,
}));

const Actions = styled(Flex)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing.unit,
}));

export { Flex, Container, Header, Body, Button, Actions };
