'use server';

import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { authOptions } from './utils/auth';
import prisma from './utils/db';

export async function addTowatchlist(formData: FormData) {
  const movieId = formData.get('movieId');
  const pathname = formData.get('pathname') as string;
  const session = await getServerSession(authOptions);

  await prisma.watchList.create({
    data: {
      userId: session?.user?.email as string,
      movieId: Number(movieId),
    },
  });

  revalidatePath(pathname);
}

export async function deleteFromWatchlist(formData: FormData) {
  const watchlistId = formData.get('watchlistId') as string;
  const pathname = formData.get('pathname') as string;

  await prisma.watchList.delete({
    where: {
      id: watchlistId,
    },
  });

  revalidatePath(pathname);
}
