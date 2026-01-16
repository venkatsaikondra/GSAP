import Image from "next/image";
import { ReactLenis } from "lenis/react";
import Copy from "../components/Copy";
import styles from "./blockReveal.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      {/* Smooth scrolling */}
      <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }} />

      {/* Scroll progress bar */}
      <div className={styles.progress} />

      {/* Navigation */}
      <nav className={styles.nav}>
        <p>BlockReveal</p>
        <p>Menu</p>
      </nav>

      {/* INTRO / HERO */}
      <section className={`${styles.section} ${styles.intro}`}>
        <div className={styles.sectionBg}>
          <Image
            src="/1.jpg"
            alt="Cinematic intro background"
            fill
            priority
            className={styles.bgImage}
          />
        </div>

        <Copy animatedScroll={false} lift blur reveal="words">
          <h1>
            Framed in tungsten and shadows, every shot holds its own deliberate
            tension. Silence, motion, and light collide to tell a story beyond
            words.
          </h1>
        </Copy>

        {/* Scroll hint */}
        <span className={styles.scrollHint}>Scroll</span>
      </section>

      {/* ABOUT */}
      <section className={`${styles.section} ${styles.about}`}>
        <Copy direction="right">
          <p>
            BlockReveal is a visual exploration of mood, texture, and contrast.
            Each frame is crafted to slow time, allowing moments to breathe and
            emotions to surface naturally.
          </p>
        </Copy>
      </section>

      {/* IMAGE BREAK */}
      <section className={`${styles.section} ${styles.bannerImg}`}>
        <div className={styles.sectionBg}>
          <Image
            src="/2.jpg"
            alt="Atmospheric visual"
            fill
            className={styles.bgImage}
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className={`${styles.section} ${styles.services}`}>
        <Copy direction="left" stagger={0.1}>
          <h1>
            We design visual narratives that feel raw, intentional, and timeless.
            From cinematic photography to immersive digital experiences, every
            detail is treated with precision.
          </h1>
        </Copy>
      </section>

      {/* IMAGE BREAK */}
      <section className={`${styles.section} ${styles.bannerImg}`}>
        <div className={styles.sectionBg}>
          <Image
            src="/3.jpg"
            alt="Cinematic transition"
            fill
            className={styles.bgImage}
          />
        </div>
      </section>

      {/* CTA */}
      <section className={`${styles.section} ${styles.cta}`}>
        <Copy direction="right" fade lift>
          <p>
            Whether it’s a brand, a moment, or a memory — we transform ideas into
            striking visual stories that stay with you long after the screen
            fades to black.
          </p>
        </Copy>
      </section>

      {/* OUTRO */}
      <section className={`${styles.section} ${styles.outro}`}>
        <div className={styles.sectionBg}>
          <Image
            src="/4.jpg"
            alt="Final cinematic frame"
            fill
            className={styles.bgImage}
          />
        </div>

        <Copy direction="left" blur reveal="words">
          <h1>
            Every ending is a quiet beginning. What remains is the feeling —
            unresolved, powerful, and unforgettable.
          </h1>
        </Copy>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <p>© 2026 BlockReveal Studio</p>
      </footer>
    </div>
  );
}
