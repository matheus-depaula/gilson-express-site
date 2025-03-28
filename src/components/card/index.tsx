import './styles.scss';

interface CardProps extends React.PropsWithChildren {
  title: string;
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="card">
      <div className="card-title">
        <h2>{title}</h2>
      </div>

      <div className="card-content">{children}</div>
    </div>
  );
};
