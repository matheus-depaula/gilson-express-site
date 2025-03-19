import classNames from 'classnames';

import './styles.scss';

interface Props extends React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  variant?: 'primary' | 'secondary';
  fullHeight?: boolean;
}

export const Section: React.FC<Props> = ({ variant = 'primary', fullHeight, className, children, ...props }) => {
  const sectionClasses = classNames(
    'section',
    `section--${variant}`,
    { 'section--full-height': fullHeight },
    className
  );

  return (
    <section className={sectionClasses} {...props}>
      {children}
    </section>
  );
};
