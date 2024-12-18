import { ColorSchemeToggle } from '@/components/colorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '@/components/welcome/Welcome';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
