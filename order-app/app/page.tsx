import { ColorSchemeToggle } from '@/app/UI/components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '@/app/UI/components/Welcome/Welcome';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
