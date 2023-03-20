import Link from 'next/link'

export default function Lots() {
  return (
    <>
      <h1>Help</h1>
      <h3>
      <textarea readOnly = {true} id="response" rows="10" cols="20" placeholder="Available Parking"></textarea>
      </h3>
      <h4>
      <textarea readOnly = {true} id="response" rows="10" cols="20" placeholder="Lot Activity"></textarea>
      </h4>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}