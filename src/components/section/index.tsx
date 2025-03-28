import classNames from 'classnames';

import './styles.scss';

interface Props extends React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  variant?: 'primary' | 'secondary';
  height?: 'full' | 'auto';
}

export const Section: React.FC<Props> = ({ variant = 'primary', height, className, children, ...props }) => {
  const sectionClasses = classNames(
    'section',
    `section--${variant}`,
    {
      'section--full-height': height === 'full',
      'section--auto-height': height === 'auto',
    },
    className
  );

  return (
    <section className={sectionClasses} {...props}>
      {children}
    </section>
  );
};
