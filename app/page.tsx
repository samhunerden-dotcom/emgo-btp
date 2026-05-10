import Image from "next/image";

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", background: "#0b0b0b", color: "white" }}>

      {/* HEADER */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 30px",
        borderBottom: "1px solid #222"
      }}>
        
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <strong>EMGO BTP</strong>
        </div>

        <a
          href="https://wa.me/33665420978"
          style={{
            background: "#25D366",
            padding: "10px 15px",
            borderRadius: "8px",
            color: "white",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          WhatsApp
        </a>
      </header>

      {/* HERO */}
      <section style={{ textAlign: "center", padding: "80px 20px" }}>
        <h1 style={{ fontSize: "40px" }}>
          Maçonnerie Générale
        </h1>
        <p style={{ opacity: 0.7 }}>
          Île-de-France • Rénovation • Gros œuvre • Terrassement
        </p>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "40px 20px" }}>
        <h2>Nos Services</h2>
        <ul>
          <li>Maçonnerie générale</li>
          <li>Rénovation</li>
          <li>Gros œuvre</li>
          <li>Terrassement</li>
        </ul>
      </section>

      {/* GALLERY */}
      <section style={{ padding: "40px 20px" }}>
        <h2>Chantiers</h2>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <img src="/chantier.jpg" width="300" />
          <img src="/chantier.jpeg" width="300" />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        textAlign: "center",
        padding: "30px",
        opacity: 0.5
      }}>
        © EMGO BTP - Maçonnerie Générale
      </footer>

    </main>
  );
}