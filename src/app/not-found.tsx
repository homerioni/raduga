import { redirect } from 'next/navigation';
import { routes } from '../constants';

export default function notFound() {
  redirect(routes.main);
}
