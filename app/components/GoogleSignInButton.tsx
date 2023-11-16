'use client';

import Image from 'next/image';
import { signIn } from 'next-auth/react';

import { Button } from '@/components/ui/button';
import GooogleIcon from '@/public/google.svg';

export default function GoogleSignInButton() {
  const onSignIn = () => () => signIn('google');

  return (
    <Button onClick={onSignIn()} variant="outline" size="icon">
      <Image src={GooogleIcon} alt="Google icon" className="w-6 h-6" />
    </Button>
  );
}
