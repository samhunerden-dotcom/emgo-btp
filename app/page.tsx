export default function Home() {
  return (
    <div
      style={{
        background: "#0a0a0a",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "25px 40px",
          borderBottom: "1px solid #222",
        }}
      >
        <img
          src="/logo.png"
          alt="Logo"
          style={{
            height: "70px",
            objectFit: "contain",
          }}
        />

        <a
          href="https://wa.me/33665420978"
          style={{
            background: "green",
            color: "white",
            padding: "10px 18px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          WhatsApp
        </a>
      </header>

      {/* HERO */}
      <section
        style={{
          textAlign: "center",
          padding: "100px 20px 60px",
        }}
      >
        <h2
          style={{
            fontSize: "52px",
            marginBottom: "20px",
          }}
        >
          Construction & Rénovation
        </h2>

        <p
          style={{
            color: "#aaa",
            fontSize: "20px",
          }}
        >
          Maçonnerie • Gros œuvre • Terrassement
        </p>

        <a
          href="https://wa.me/33665420978"
          style={{
            display: "inline-block",
            marginTop: "30px",
            padding: "14px 28px",
            background: "green",
            color: "white",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Demander un devis
        </a>
      </section>

      {/* IMAGES */}
      <section
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px 40px",
        }}
      >
        <img
          src="/chantier.jpg"
          alt="chantier"
          style={{
            width: "50%",
            borderRadius: "16px",
            objectFit: "cover",
          }}
        />

        <img
          src="/chantier.jpeg"
          alt="chantier"
          style={{
            width: "50%",
            borderRadius: "16px",
            objectFit: "cover",
          }}
        />
      </section>

      {/* SERVICES */}
      <section
        style={{
          padding: "80px 40px",
        }}
      >
        <h3
          style={{
            fontSize: "36px",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          Nos Services
        </h3>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              background: "#151515",
              padding: "30px",
              borderRadius: "16px",
              width: "300px",
            }}
          >
            <h4>Maçonnerie</h4>

            <p style={{ color: "#aaa" }}>
              Construction, murs et gros œuvre.
            </p>
          </div>

          <div
            style={{
              background: "#151515",
              padding: "30px",
              borderRadius: "16px",
              width: "300px",
            }}
          >
            <h4>Rénovation</h4>

            <p style={{ color: "#aaa" }}>
              Intérieur et extérieur.
            </p>
          </div>

          <div
            style={{
              background: "#151515",
              padding: "30px",
              borderRadius: "16px",
              width: "300px",
            }}
          >
            <h4>Terrassement</h4>

            <p style={{ color: "#aaa" }}>
              Préparation terrain et fondations.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid #222",
          padding: "30px",
          textAlign: "center",
          color: "#777",
        }}
      >
        © 2026 EM-GO BTP
      </footer>
    </div>
  );
}