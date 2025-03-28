import { Section } from '@/components/section';
import { useNavigation } from '@/hooks/useNavigation';
import { Button } from '@/components/button';
import { Navbar } from '@/components/navbar';
import { FaTruckFast } from 'react-icons/fa6';

import logo from '/images/logo.png';
import './styles.scss';

export const Hero: React.FC = () => {
  const { scrollTo } = useNavigation();

  const handleQuoteClick = () => {};

  return (
    <Section variant="secondary" className="hero" height="full">
      <div className="logo-container">
        <Navbar className="hero-navbar" />
      </div>

      <div className="content">
        <img id="hero-logo" src={logo} alt="Gilson Express Logo" className="logo" onClick={() => scrollTo('#')} />

        <div>
          <p>
            Bem-vindo à <span className="text-primary">Expresso Gilson</span>, sua parceira em transporte em Jacareí.
            Com foco em <span className="text-primary">agilidade</span> e{' '}
            <span className="text-primary">eficiência</span>, oferecemos serviços que impulsionam a economia local.
            Investimos em tecnologia e equipe qualificada para garantir que sua carga chegue rápido ao destino. Escolha
            a Expresso Gilson e veja a diferença!
          </p>

          <Button size="large" onClick={handleQuoteClick}>
            Faça sua cotação
            <FaTruckFast />
          </Button>
        </div>
      </div>
    </Section>
  );
};
