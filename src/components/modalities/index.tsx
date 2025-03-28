import { Card } from '@/components/card';
import { MainContent } from '@/components/main-content';
import { Button } from '@/components/button';
import { FaBoxesStacked, FaTruckFast } from 'react-icons/fa6';

import './styles.scss';

export const Modalities: React.FC = () => {
  const handleQuoteClick = (type: 'fractionated' | 'dedicated') => {
    console.log(type);
  };

  return (
    <MainContent id="plans" title="Nossos planos de serviços" sectionVariant="secondary" className="modalities">
      <div className="cards">
        <Card title="Fracionado">
          <FaBoxesStacked />

          <p>Seu pedido será combinado com outros, podendo aumentar o prazo de entrega.</p>

          <Button variant="outline" size="large" onClick={() => handleQuoteClick('fractionated')}>
            Faça sua cotação
          </Button>
        </Card>

        <Card title="Dedicado">
          <FaTruckFast />

          <p>
            Seu pedido será coletado e entregue em um <strong>veículo exclusivo</strong> para sua carga.
          </p>

          <Button variant="outline" size="large" onClick={() => handleQuoteClick('dedicated')}>
            Faça sua cotação
          </Button>
        </Card>
      </div>
    </MainContent>
  );
};
