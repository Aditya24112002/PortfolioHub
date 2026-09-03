import SectionTitle from "../SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-8 py-24"
    >
      <SectionTitle title="About Me" />

      <div className="theme-surface rounded-2xl p-8">

        <p className="theme-text text-lg">

          I'm Aditya, a software developer
          passionate about building modern
          applications and continuously
          improving my skills.

        </p>

      </div>
    </section>
  );
}