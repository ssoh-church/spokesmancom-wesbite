import { useRouter } from 'next/router';
import { routes } from './routes';

export const useCustomRouter = () => {
  const router = useRouter();

  const navigateTo = (route: string) => {
    router.push(route);
  };

  return { navigateTo, routes };
};
