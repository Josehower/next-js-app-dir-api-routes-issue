'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <button
      onClick={async () => {
        await fetch('/api');
        router.refresh();
      }}
    >
      Fetch /api
    </button>
  );
}
