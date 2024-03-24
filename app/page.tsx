'use client';

import { Poppins } from 'next/font/google';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { LoginButton } from '@/components/auth/login-button';
import { ImagesSlider } from '@/components/ui/images-slider';

const font = Poppins({
  subsets: ['latin'],
  weight: ['600'],
});

export default function Home() {
  const images = [
    'https://images.unsplash.com/photo-1696838165908-391883adf443?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1699009436134-b87643babed9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1697618365363-1f4638b9c7d5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  return (
    <ImagesSlider
      className='flex h-full flex-col items-center justify-center '
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
        <motion.p className='font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-2'>
          Auth v5 with Next | Prisma
        </motion.p>
        <motion.p className='text-white text-lg mb-10'>
          A complete and secure authentication service
        </motion.p>
        <LoginButton asChild>
          <Button variant='secondary' size='lg'>
            Sign in
          </Button>
        </LoginButton>
      </motion.div>
    </ImagesSlider>
  );
}
