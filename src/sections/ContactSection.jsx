import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";

const ContactSection = () => {
  return (
    <Reveal>
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <SectionTitle
          title="Contact"
          subtitle="Feel free to reach out for opportunities or collaboration"
        />

        <div className="space-y-3 text-gray-600">
          <p>
            <b>Email:</b>{" "}
            <a
              href="mailto:sm0361436@gmail.com"
              className="text-blue-600 hover:underline"
            >
              sm0361436@gmail.com
            </a>
          </p>

          <p>
            <b>GitHub:</b>{" "}
            <a
              href="https://github.com/MohammedIrfan232"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              github.com/MohammedIrfan232
            </a>
          </p>

          <p>
            <b>LinkedIn:</b>{" "}
            <a
              href="https://linkedin.com/in/mohammed-irfan-s-282776353/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              linkedin.com/in/mohammed-irfan-s-282776353
            </a>
          </p>
        </div>
      </section>
    </Reveal>
  );
};

export default ContactSection;