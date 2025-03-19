import { useNavbar } from './useNavbar';

export const useNavigation = () => {
  const { navbarHeight } = useNavbar();

  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  const navigateTo = (url: string) => {
    window.location.href = url;
  };

  const scrollTo = (id: string) => {
    const isRoot = id === '#';

    const parsedId = (isRoot ? 'root' : id.replace('#', '')).trim();
    const targetElement = document.getElementById(parsedId);
    const offsetPixelFix = isRoot ? 0 : 1;

    if (!targetElement) return;

    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight + offsetPixelFix;

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  };

  return { openLink, navigateTo, scrollTo };
};
