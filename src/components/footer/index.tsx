import { FaHeart } from 'react-icons/fa6';
import { Section } from '@/components/section';

import './styles.scss';

export const Footer: React.FC = () => {
  return (
    <footer>
      <Section variant="secondary" height="auto">
        <span>{new Date().getFullYear()} ® Todos os direitos reservados</span>

        <span>
          Desenvolvido com <FaHeart /> por{' '}
          <a href="https://depauladomingos.com" target="_blank">
            Matheus Domingos
          </a>
        </span>
      </Section>
    </footer>
  );
};
