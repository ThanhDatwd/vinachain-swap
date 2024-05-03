import React from 'react';
import { ArrowTop } from '@/assets/icons/ArrowTop';
import { t } from 'i18next';

const ScrollToTopButton: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <button className="flex gap-1 justify-center items-center hover:text-blue dark:hover:text-scanDark" onClick={scrollToTop}>
      <ArrowTop className='!w-4 !h-4' />
      <span className="">{t('backToTop')}</span>
    </button>
  );
};

export default ScrollToTopButton;
