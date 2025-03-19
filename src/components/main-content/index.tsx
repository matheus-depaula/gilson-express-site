import classNames from 'classnames';
import { Section } from '@/components/section';

import './styles.scss';

interface Props extends React.PropsWithChildren {
  id?: string;
  title: string;
  sectionVariant?: 'primary' | 'secondary';
  className?: string;
}

export const MainContent: React.FC<Props> = ({ id, title, sectionVariant = 'primary', className, children }) => {
  const classes = classNames('main-content', className);

  return (
    <Section id={id} className={classes} variant={sectionVariant}>
      <div className="main-content-content">
        <h1 className="title">{title}</h1>

        {children}
      </div>
    </Section>
  );
};
