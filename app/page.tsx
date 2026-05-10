export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", background: "#0b0b0b", color: "white", padding: "20px" }}>

      {/* HERO */}
      <section style={{ textAlign: "center", padding: "80px 20px" }}>
        <h1 style={{ fontSize: "40px" }}>Maçonnerie Générale</h1>
        <p>Île-de-France • Devis gratuit sous 24h</p>

        <a
          href="https://wa.me/33665420978"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 20px",
            background: "#25D366",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none"
          }}
        >
          WhatsApp Devis
        </a>
      </section>

      {/* SERVICES */}
      <section>
        <h2>Nos Services</h2>
        <ul>
          <li>Maçonnerie générale</li>
          <li>Rénovation</li>
          <li>Gros œuvre</li>
          <li>Terrassement</li>
        </ul>
      </section>

      {/* GALLERY */}
      <section style={{ marginTop: "40px" }}>
        <h2>Chantiers</h2>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <img src="/chantier.jpg" width="300" />
          <img src="/chantier.jpeg" width="300" />
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ marginTop: "40px" }}>
        <h2>Contact</h2>
        <p>📞 06 65 42 09 78</p>
      </section>

    </main>
  );
}