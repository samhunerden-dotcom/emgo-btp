import Image from "next/image";

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", background: "#0a0a0a", color: "white" }}>

      {/* HEADER */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 25px",
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
            padding: "10px 14px",
            borderRadius: "8px",
            color: "white",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Devis WhatsApp
        </a>
      </header>

      {/* HERO */}
      <section style={{ textAlign: "center", padding: "70px 20px" }}>
        <h1 style={{ fontSize: "42px" }}>
          Maçonnerie Générale
        </h1>
        <p style={{ opacity: 0.7 }}>
          Île-de-France • Rénovation • Fenêtres • Gros œuvre
        </p>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "40px 20px" }}>
        <h2>Services</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
          gap: "10px"
        }}>
          {["Maçonnerie", "Rénovation", "Fenêtres", "Terrassement"].map((s) => (
            <div key={s} style={{
              background: "#151515",
              padding: "15px",
              borderRadius: "10px",
              textAlign: "center"
            }}>
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section style={{ padding: "40px 20px" }}>
        <h2>Chantiers</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: "10px"
        }}>
          <img src="/chantier.jpg" style={{ width: "100%", borderRadius: "10px" }} />
          <img src="/chantier.jpeg" style={{ width: "100%", borderRadius: "10px" }} />
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Contact</h2>
        <p>📞 06 65 42 09 78</p>
      </section>

      {/* FLOAT WHATSAPP */}
      <a
        href="https://wa.me/33665420978"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#25D366",
          padding: "14px 16px",
          borderRadius: "50px",
          color: "white",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        WhatsApp
      </a>

    </main>
  );
}