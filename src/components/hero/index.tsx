import { Section } from '@/components/section';
import { useNavigation } from '@/hooks/useNavigation';
import { Button } from '@/components/button';
import { FaTruckFast } from 'react-icons/fa6';
import { NAVBAR_ITEMS } from '@/components/navbar/constants';

import logo from '@/assets/images/logo.png';
import truck from '@/assets/images/truck.png';
import './styles.scss';

export const Hero: React.FC = () => {
  const { scrollTo } = useNavigation();

  const handleQuoteClick = () => {
    const anchor = NAVBAR_ITEMS.find(e => e.label === 'Contato');

    if (anchor) scrollTo(anchor.href);
  };

  return (
    <Section variant="secondary" className="hero" height="full">
      <div className="hero-navbar">
        {NAVBAR_ITEMS.map(({ label, href }) => (
          <Button key={href} variant="outline" size="small" onClick={() => scrollTo(href)}>
            {label}
          </Button>
        ))}
      </div>

      <div className="content">
        <div className="content-left">
          <img id="hero-logo" src={logo} alt="Gilson Express Logo" className="logo" onClick={() => scrollTo('#')} />

          <div>
            <p>
              Bem-vindo à <span className="text-primary">Expresso Gilson</span>, sua parceira em transporte em Jacareí.
              Com foco em <span className="text-primary">agilidade</span> e{' '}
              <span className="text-primary">eficiência</span>, oferecemos serviços que impulsionam a economia local.
              <br />
              Investimos em tecnologia e equipe qualificada para garantir que sua carga chegue rápido ao destino.
              Escolha a Expresso <span className="text-primary">Gilson</span> e veja a diferença!
            </p>

            <Button size="large" onClick={handleQuoteClick}>
              Faça sua cotação
              <FaTruckFast />
            </Button>
          </div>
        </div>

        <div className="content-right">
          <img src={truck} alt="Caminhão Gilson Express" />
        </div>
      </div>
    </Section>
  );
};
