import Navbar from '@/components/Navbar';
import { ReactNode } from 'react';

export default function Layout({ children } : { children: ReactNode }) {
  return (
    <div>
      <Navbar />

      <main>{children}</main>

      <div className="absolute inset-0 -z-10 h-full bg-[size:4rem_4rem] opacity-40 bg-[linear-gradient(to_right,hsla(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsla(var(--primary))_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,hsla(var(--primary))_40%,transparent_120%)]" />
    </div>
  );
}