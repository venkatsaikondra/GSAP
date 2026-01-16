import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "600px" }}>
        {/* Heading */}
        <h1
          style={{
            fontSize: "48px",
            fontWeight: 600,
            marginBottom: "16px",
            letterSpacing: "-0.02em",
          }}
        >
          Experiments
        </h1>

        {/* Description */}
        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "18px",
            lineHeight: "1.6",
            marginBottom: "32px",
          }}
        >
          A collection of motion and interaction experiments built with GSAP
          and modern web tools.
        </p>

        {/* Links */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/blockReveal"
            style={{
              padding: "14px 28px",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#fff",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
          >
            BlockReveal
          </Link>

          <Link
            href="/stickyCards"
            style={{
              padding: "14px 28px",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#fff",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
          >
            StickyCards
          </Link>
        </div>
      </div>
    </div>
  );
}
