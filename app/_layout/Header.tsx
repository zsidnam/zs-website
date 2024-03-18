import { ThemeSwitcher } from '@/_theme/ThemeSwitcher';
import { TWProps } from '@/_types/client';

export function Header({ className }: TWProps) {
  return (
    <header className={className}>
      <ThemeSwitcher className="absolute top-2 right-2" />
    </header>
  );
}
