import { PropsWithChildren } from 'react';
import { ErrorBoundary as BaseErrorBoundary } from 'react-error-boundary';
import githubMarkIcon from '../assets/github-mark.svg';
import { Container, Description, Title } from './styled';
import { GitHubButton } from '../styled';

function ErrorBoundary({ children }: PropsWithChildren) {
  return (
    <BaseErrorBoundary
      fallback={
        <Container>
          <Title>Something went wrong...</Title>
          {/* ask to open an issue on the github repo */}
          <Description>
            Try to refresh the page or open an issue on the GitHub repository.
          </Description>
          <GitHubButton
            onClick={() =>
              window.open('https://github.com/suren-atoyan/monaco-react/issues', '_blank')
            }
          >
            <img src={githubMarkIcon} alt="GitHub" />
            Open an issue
          </GitHubButton>
        </Container>
      }
    >
      {children}
    </BaseErrorBoundary>
  );
}

export default ErrorBoundary;
