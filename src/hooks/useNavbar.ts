import { useEffect, useState } from 'react';

export const useNavbar = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const [element] = document.getElementsByClassName('navbar');
    const height = element.getBoundingClientRect().height;

    setNavbarHeight(height);
  }, []);

  return { navbarHeight };
};
