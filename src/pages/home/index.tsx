import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { MainContent } from '@/components/main-content';
import { Modalities } from '@/components/modalities';
import { Contact } from '@/components/contact';
import { Customers } from '@/components/customers';
import { Footer } from '@/components/footer';

import './styles.scss';

export const Home: React.FC = () => {
  return (
    <div className="home">
      <Navbar />

      <Hero />

      <MainContent id="about-us" title="Quem somos">
        <p>
          A <strong>Expresso Gilson</strong> é uma transportadora destacada pela sua eficiência e pela satisfação de
          seus clientes. Com 10 anos de experiência no mercado, a empresa oferece soluções de transporte que se destacam
          pela rapidez e segurança. A equipe da Expresso Gilson é altamente qualificada e está sempre pronta para
          atender às necessidades dos clientes, assegurando que cada entrega seja realizada dentro dos prazos
          estabelecidos. Além disso, a frota diversificada da empresa possibilita o atendimento a diferentes demandas,
          desde pequenas encomendas até grandes volumes. A reputação da Expresso Gilson é construída com base na
          confiança e na qualidade dos serviços prestados, consolidando-se como uma escolha confiável no setor de
          transporte.
        </p>
      </MainContent>

      <Modalities />

      <Customers />

      <Contact />

      <Footer />
    </div>
  );
};
