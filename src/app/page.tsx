// src/app/page.tsx
import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/en'); // O '/es' si preferís que inicie en español
}
