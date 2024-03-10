import { Scene } from '@/app/components/Scene';

export default function Home() {
  return (
    <main className="grid place-items-center min-h-screen">
      <h1 className="text-2xl">Hello World</h1>

      <div id="scene-container" className="h-[500px] w-[500px] bg-blue-300">
        <Scene />
      </div>
    </main>
  );
}
