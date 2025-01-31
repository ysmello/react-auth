import { createFileRoute } from '@tanstack/react-router';
import Dashboard from '../../pages/Dashboard';

export const Route = createFileRoute('/_authenticated/dashboard')({
  component: Dashboard,
});
