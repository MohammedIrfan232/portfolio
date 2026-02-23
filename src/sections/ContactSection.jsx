import Reveal from "../components/Reveal";

const ContactSection = () => {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-28 scroll-mt-28">
      <Reveal>
        <h2 className="text-3xl font-bold mb-2">Contact</h2>
        <p className="text-gray-400 mb-6">
          Feel free to reach out for collaboration
        </p>

        <div className="glass rounded-xl p-6 space-y-2">
          <p>
            Email:{" "}
            <a href="mailto:sm0361436@gmail.com" className="text-cyan-400">
              sm0361436@gmail.com
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              className="text-cyan-400"
              href="https://github.com/MohammedIrfan232"
              target="_blank"
            >
              MohammedIrfan232
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              className="text-cyan-400"
              href="https://linkedin.com/in/mohammed-irfan-s-282776353/"
              target="_blank"
            >
              Profile
            </a>
          </p>
        </div>
      </Reveal>
    </section>
  );
};

export default ContactSection;
