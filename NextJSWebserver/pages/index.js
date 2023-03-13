import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Parking Lot Occcupany Detection System (PODS)</h1>
      <h2 className="title">
        <Link href="/lots">Available Parking Lots</Link>
      </h2>
      <h2 className="title">
        <Link href="/stats">Parking Lot Statistics</Link>
      </h2>
      <h2 className="title">
        <Link href="/help">Help</Link>
      </h2>
    </>
  );
}