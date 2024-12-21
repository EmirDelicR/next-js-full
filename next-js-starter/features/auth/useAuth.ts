'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { localStorageHelper } from '@/lib/utils/general/general';

const useAuth = (email: string, isSuccess: boolean) => {
  const [setEmail] = localStorageHelper<string | null>('example-app-email');
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      setEmail(email);
      router.push('/settings');
    }
  }, [isSuccess, email, setEmail]);
};

export default useAuth;
