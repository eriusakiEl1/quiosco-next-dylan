"use client";
import { useRouter } from 'next/navigation';

export default function LoginButton() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login');
  };

  return (
    <button
      className="button justify-end bg-amber-200 lg:w-auto text-xl px-7 py-3 text-center font-bold"
      onClick={handleLoginClick}
    >
      Login
    </button>
  );
}