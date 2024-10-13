import { WelcomeProps } from './Welcome.types';
import * as Style from './Welcome.style';

const Welcome = ({ title = 'Default title', testId = 'welcome', description }: WelcomeProps) => {
  return (
    <>
      <Style.Title data-testid={testId}>{title}</Style.Title>
      <Style.Subtitle>{description}</Style.Subtitle>
    </>
  )
};

export default Welcome;
