import { ReactElement } from 'react';
import { NavigationProps } from './interface';

const Navigation = (props: NavigationProps): ReactElement => {
  const { className } = props;
  return <div className={className}></div>;
};

export default Navigation;
