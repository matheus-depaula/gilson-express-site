import { MainContent } from '@/components/main-content';

import decaLogo from '@/assets/images/customers/deca-logo.png';
import whiteMartinsLogo from '@/assets/images/customers/white-martins-logo.png';
import edpLogo from '@/assets/images/customers/edp-logo.png';
import servNewsLogo from '@/assets/images/customers/serv-news-logo.png';
import emaxAutomacao from '@/assets/images/customers/emax-automacao-logo.png';
import raccortubiLogo from '@/assets/images/customers/raccortubi-logo.png';
import robotconLogo from '@/assets/images/customers/robotcon-logo.png';
import idealLogo from '@/assets/images/customers/ideal-logo.png';
import './styles.scss';

export const Customers: React.FC = () => {
  return (
    <MainContent title="Clientes" className="customers">
      <div className="customers-logos">
        <img src={decaLogo} alt="Logo da Deca" title="Deca" />
        <img src={whiteMartinsLogo} alt="Logo da White Martins" title="White Martins" />
        <img src={edpLogo} alt="Logo da EDP" title="EDP" />
        <img src={servNewsLogo} alt="Logo da Serv News" title="Serv News" />
        <img src={emaxAutomacao} alt="Logo da Emax Automação" title="Emax Automação" />
        <img src={robotconLogo} alt="Logo da Robotcon" title="Robotcon" />
        <img src={raccortubiLogo} alt="Logo da Raccortubi" title="Raccortubi" />
        <img src={idealLogo} alt="Logo da Ideal" title="Ideal" />
      </div>
    </MainContent>
  );
};
