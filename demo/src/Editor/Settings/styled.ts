import { styled } from '@pigment-css/react';
import { Flex } from '../../styled';

const Container = styled(Flex)(({ theme }) => ({
  gap: theme.spacing.unit * 3,
  height: '100%',
}));

const Section = styled(Flex)(({ theme }) => ({
  gap: theme.spacing.unit,
}));

const Title = styled('h2')(({ theme }) => ({
  margin: 0,
  paddingBottom: theme.spacing.unit * 2,
  borderBottom: `1px solid white`,
}));

const SubTitle = styled('h3')(() => ({
  margin: 0,
}));

const Select = styled('select')(() => ({
  appearance: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'none',

  backgroundColor: '#fff',
  border: '1px solid #ccc',
  borderRadius: 6,
  padding: '7px 40px 7px 15px', // Adjust padding for the dropdown arrow
  fontSize: '12px',
  fontFamily: 'monospace',
  color: '#333',
  cursor: 'pointer',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',

  // Custom dropdown arrow using inline SVG
  backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>')`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 12px center',
  backgroundSize: '16px',

  '&:focus': {
    outline: 'none',
    borderColor: '#007bff',
    boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)',
  },

  '&:hover': {
    borderColor: '#aaa',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
}));

const Description = styled('p')(() => ({
  margin: 0,
  fontWeight: 600,
}));

export { Title, Container, SubTitle, Select, Description, Section };
