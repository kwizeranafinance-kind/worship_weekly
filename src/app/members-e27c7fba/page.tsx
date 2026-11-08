import type { Metadata } from 'next';
import MembersPlayer from './MembersPlayer';
export const metadata: Metadata = {
  title: 'Members Listening Room — Worship Weekly',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};
export default function MembersPage() { return <MembersPlayer />; }
