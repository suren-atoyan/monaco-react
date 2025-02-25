import { styled } from '@pigment-css/react';
import { Flex } from '../styled';

const EditorContainer = styled(Flex)(() => ({
  height: '100%',
  borderRadius: 6,
  overflow: 'hidden',
}));

const Container = styled(Flex)(() => ({
  height: '100%',
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

export { EditorContainer, Container };
