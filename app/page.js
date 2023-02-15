'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <button
      onClick={async () => {
        try {
          const response = await fetch('/api', { method: 'POST' });
          const data = response.json();

          router.push(data.url);
        } catch (error) {
          console.error(error);
          router.refresh();
        }
      }}
    >
      Fetch /api
    </button>
  );
}
