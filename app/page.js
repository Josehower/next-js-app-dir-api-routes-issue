'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [error, setError] = useState();
  return (
    <>
      {error ? (
        <div>
          {error} <br />
          <button
            onClick={async () => {
              router.refresh();
            }}
          >
            refresh
          </button>
        </div>
      ) : (
        <button
          onClick={async () => {
            try {
              const response = await fetch('/api', { method: 'POST' });
              const data = response.json();

              router.push(data.url);
            } catch (error) {
              console.error(error);
              setError(`
              ${error.message}.

              refresh to see the app is broken
              `);
            }
          }}
        >
          Fetch /api
        </button>
      )}
    </>
  );
}
