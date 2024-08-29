import { redirect } from 'next/navigation';

export default function Home() {
  redirect ('/home'); // Automatically redirect to the home page
  // return null;
}
