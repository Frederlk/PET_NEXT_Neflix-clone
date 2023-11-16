'use client';

import { GithubIcon } from 'lucide-react';
import { signIn } from 'next-auth/react';

import { Button } from '@/components/ui/button';

export default function GithubSignInButton() {
  const onSignIn = () => () => signIn('github');

  return (
    <Button onClick={onSignIn()} variant="outline" size="icon">
      <GithubIcon className="w-4 h-4" />
    </Button>
  );
}
