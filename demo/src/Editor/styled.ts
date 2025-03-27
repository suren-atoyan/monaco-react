import { styled } from '@pigment-css/react';
import { Flex } from '../styled';

const EditorContainer = styled(Flex)(() => ({
  height: '100%',
  borderRadius: 6,
  overflow: 'hidden',
}));

const Container = styled(Flex)(() => ({
  height: '100%',
  position: 'relative',
  '.resize-handle': {
    cursor: 'col-resize',
    width: 16,
    margin: '0 8px',
    borderRadius: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
  },
}));

const ToggleButton = styled('button')<{ $showSettings?: boolean }>(({ $showSettings }) => ({
  position: 'absolute',
  right: $showSettings ? '-40px' : 0,
  top: 0,
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#90EE90',
  color: '#333',
  border: 'none',
  borderRadius: $showSettings ? '0 4px 4px 0' : '0 0 0 4px',
  cursor: 'pointer',
  zIndex: 1000,
  transition: 'all 0.2s',
  '&:hover': {
    backgroundColor: '#7FDB7F',
  },
  '&::before': {
    content: '"☰"',
    fontSize: '24px',
  },
}));

export { EditorContainer, Container, ToggleButton };
