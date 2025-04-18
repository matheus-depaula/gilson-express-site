import { useEffect, useState } from 'react';
import cn from 'classnames';
import { useNavigation } from '@/hooks/useNavigation';
import { Button } from '@/components/button';
import { NAVBAR_ITEMS } from './constants';

import logo from '/images/logo-no-description.png';
import './styles.scss';

interface Props {
  className?: string;
  unclickable?: boolean;
}

export const Navbar: React.FC<Props> = ({ className, unclickable }) => {
  const { scrollTo } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);

  const navbarClass = cn('navbar', { 'navbar--scrolled': isScrolled, 'navbar--unclickable': unclickable }, className);

  useEffect(() => {
    const handleScroll = () => {
      const DEFAULT_HERO_LOGO_HEIGHT = 5.375;
      const SECTION_FIXED_PADDING = 32; // 2rem

      const position = window.scrollY;
      const heroLogoHeight = document.getElementById('hero-logo')?.getBoundingClientRect().height;
      const offset = (heroLogoHeight || DEFAULT_HERO_LOGO_HEIGHT) + SECTION_FIXED_PADDING + 150;

      setIsScrolled(position >= offset);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll(); // keep for the first render

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={navbarClass}>
      <nav>
        <img src={logo} alt="Gilson Express Logo" className="logo" onClick={() => scrollTo('#')} />

        <div className="nav-buttons">
          {NAVBAR_ITEMS.map(({ label, href }) => (
            <Button key={href} variant="outline" size="small" onClick={() => scrollTo(href)}>
              {label}
            </Button>
          ))}
        </div>
      </nav>
    </header>
  );
};
