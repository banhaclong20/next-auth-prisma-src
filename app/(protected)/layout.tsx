'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { Navbar } from './_components/navbar';
import { ImagesSlider } from '@/components/ui/images-slider';

const images = [
  'https://images.unsplash.com/photo-1633886038290-6023143cd3ba?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <ImagesSlider
      className='flex h-full flex-col items-center justify-center'
      images={images}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className='z-50 flex flex-col justify-center items-center'
      >
        <Navbar />
        {children}
      </motion.div>
    </ImagesSlider>
  );
};

export default ProtectedLayout;
