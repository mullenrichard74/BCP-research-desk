
"use client";

import { useState } from "react";

type MapNode = {
  id: string;
  name: string;
  description: string;
};

const nodes: MapNode[] = [
  {
    id: "investors",
    name: "Investor Groups",
    description:
      "Investors hold equity interests in the utility's ownership structure. Individual interests and voting rights require source verification.",
  },
  {
    id: "holdings",
    name: "DQE Holdings LLC",
    description:
      "A holding company in the Duquesne Light ownership structure.",
  },
  {
    id: "utility",
    name: "Duquesne Light Company",
    description:
      "The regulated electric utility serving customers in the Pittsburgh region.",
  },
  {
    id: "watson",
    name: "Watson Substation",
    description:
      "An infrastructure project associated with Duquesne Light. Project funding and contractor relationships are separate from equity ownership.",
  },
];

export default function DuquesneLightMap() {
  const [selected, setSelected] = useState("utility");
  const active = nodes.find((node) => node.id === selected);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#101722",
        color: "#ffffff",
        padding: "32px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <p style={{ color: "#d9b46a" }}>
          THE BLACK CAPITAL PROJECT
        </p>

        <h1>Duquesne Light Capital Map</h1>
        <p>Who Controls the Power Grid?</p>
        <p style={{ color: "#b9c4d1" }}>
          Interactive research prototype — not approved for publication.
        </p>

        <div style={{ marginTop: 35, textAlign: "center" }}>
          {nodes.map((node, index) => (
            <div key={node.id}>
              <button
                onClick={() => setSelected(node.id)}
                style={{
                  display: "block",
                  width: "100%",
                  maxWidth: 460,
                  margin: "0 auto",
                  padding: 18,
                  background:
                    selected === node.id ? "#245f82" : "#243143",
                  color: "#ffffff",
                  border: "1px solid #d9b46a",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontSize: 16,
                }}
              >
                {node.name}
              </button>

              {index < nodes.length - 1 && (
                <div
                  style={{
                    padding: 12,
                    color: "#d9b46a",
                    fontSize: 22,
                  }}
                >
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>

        <section
          style={{
            marginTop: 35,
            padding: 24,
            background: "#1c2938",
            borderRadius: 10,
          }}
        >
          <h2>{active?.name}</h2>
          <p>{active?.description}</p>
          <p style={{ color: "#d9b46a" }}>
            Evidence status: Pending source review
          </p>
        </section>
      </div>
    </main>
  );
}
