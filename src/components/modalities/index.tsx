import { Card } from '@/components/card';
import { MainContent } from '@/components/main-content';
import { Button } from '@/components/button';
import { FaBoxesStacked, FaTruckFast } from 'react-icons/fa6';
import { useNavigation } from '@/hooks/useNavigation';
import { NAVBAR_ITEMS } from '@/components/navbar/constants';

import './styles.scss';

export const Modalities: React.FC = () => {
  const { scrollTo } = useNavigation();

  const handleQuoteClick = (type: 'fractionated' | 'dedicated') => {
    const form = document.getElementById('contact-form');

    if (form) {
      const selectInput = form.querySelector('select#subject') as HTMLSelectElement;

      if (selectInput) {
        const mapper: Record<typeof type, string> = {
          fractionated: 'Cotação fracionado',
          dedicated: 'Cotação dedicado',
        };

        selectInput.value = mapper[type];
        selectInput.dispatchEvent(new Event('change'));

        const event = new Event('change', { bubbles: true });

        selectInput.dispatchEvent(event);
      }
    }

    const anchor = NAVBAR_ITEMS.find(e => e.label === 'Contato');

    if (anchor) scrollTo(anchor.href);
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
