export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", background: "#0a0a0a", color: "white" }}>

      {/* HERO */}
      <section style={{
        padding: "100px 20px",
        textAlign: "center",
        background: "linear-gradient(135deg,#111,#1a1a1a)"
      }}>
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
          Maçonnerie Générale
        </h1>
        <p style={{ fontSize: "18px", opacity: 0.8 }}>
          Île-de-France • Rénovation • Gros œuvre • Terrassement
        </p>

        <a
          href="https://wa.me/33665420978"
          style={{
            display: "inline-block",
            marginTop: "25px",
            padding: "14px 22px",
            background: "#25D366",
            color: "white",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          📞 Devis Gratuit WhatsApp
        </a>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "60px 20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Nos Services
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: "15px"
        }}>
          {["Maçonnerie", "Rénovation", "Gros œuvre", "Terrassement"].map((s) => (
            <div key={s} style={{
              background: "#151515",
              padding: "20px",
              borderRadius: "12px",
              textAlign: "center"
            }}>
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section style={{ padding: "60px 20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Chantiers
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "10px"
        }}>
          <img src="/chantier.jpg" style={{ width: "100%", borderRadius: "10px" }} />
          <img src="/chantier.jpeg" style={{ width: "100%", borderRadius: "10px" }} />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        textAlign: "center",
        padding: "30px",
        opacity: 0.6
      }}>
        © Maçonnerie Générale - Île-de-France
      </footer>

    </main>
  );
}