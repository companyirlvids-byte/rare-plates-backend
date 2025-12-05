"use client";
import { useEffect, useState } from "react";

export default function Admin() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/listings?all=1`)
      .then(res => res.json())
      .then(setItems);
  }, []);

  const approve = async (id) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/listings/approve`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    });
    alert("Approved");
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      {items.map(x => (
        <div className="card" key={x._id}>
          <h2>{x.plate}</h2>
          <p>${x.price}</p>
          <button onClick={() => approve(x._id)}>Approve</button>
        </div>
      ))}
    </div>
  );
}
