import { Section } from '@/components/section';
import { useNavigation } from '@/hooks/useNavigation';
import { Button } from '@/components/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { DeliveryTruck02Icon } from '@hugeicons/core-free-icons';
import { Navbar } from '@/components/navbar';

import logo from '/images/logo.png';
import './styles.scss';

export const Hero: React.FC = () => {
  const { scrollTo } = useNavigation();

  const handleQuoteClick = () => {};

  return (
    <Section variant="secondary" className="hero" fullHeight>
      <div className="logo-container">
        <img id="hero-logo" src={logo} alt="Gilson Express Logo" className="logo" onClick={() => scrollTo('#')} />

        <Navbar className="hero-navbar" />
      </div>

      <div className="content">
        <p>
          Bem-vindo à <span className="text-primary">Expresso Gilson</span>, sua parceira em transporte em Jacareí. Com
          foco em <span className="text-primary">agilidade</span> e <span className="text-primary">eficiência</span>,
          oferecemos serviços que impulsionam a economia local. Investimos em tecnologia e equipe qualificada para
          garantir que sua carga chegue rápido ao destino. Escolha a Expresso Gilson e veja a diferença!
        </p>

        <Button variant="outline" size="large" onClick={handleQuoteClick}>
          Faça sua cotação
          <HugeiconsIcon icon={DeliveryTruck02Icon} />
        </Button>
      </div>
    </Section>
  );
};
