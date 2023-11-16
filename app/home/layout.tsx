import { ReactNode } from 'react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import { authOptions } from '@/app/utils/auth';
import Navbar from '@/app/components/Navbar';

export default async function HomeLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect('/login');
  }

  return (
    <>
      <Navbar user={session.user} />
      <main className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  );
}
