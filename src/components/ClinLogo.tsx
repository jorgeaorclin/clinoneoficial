import React from 'react';
import { cn } from '@/lib/utils';

interface ClinLogoProps {
  className?: string;
  imageClassName?: string;
}

const ClinLogo: React.FC<ClinLogoProps> = ({ className, imageClassName }) => {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <img src="/clinone.png" alt="Clin logo" className={cn("h-10 w-auto", imageClassName)} />
      <span className="sr-only">Clin</span>
    </div>
  );
};

export default ClinLogo;
