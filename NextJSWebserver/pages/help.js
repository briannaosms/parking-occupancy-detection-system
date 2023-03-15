import Link from 'next/link'

export default function Lots() {
  return (
    <>
      <h1>Help</h1>
      <textarea readOnly = {true} id="response" rows="10" cols="20" placeholder="Available Parking"></textarea>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}