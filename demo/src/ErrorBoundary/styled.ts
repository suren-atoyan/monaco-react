import { styled } from '@pigment-css/react';
import { Flex } from '../styled';

const Container = styled(Flex)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  gap: theme.spacing.unit * 2,
  padding: theme.spacing.unit * 3,
}));

const Title = styled('h1')(() => ({
  margin: 0,
}));

const Description = styled('h3')(() => ({
  margin: 0,
}));

export { Container, Title, Description };
