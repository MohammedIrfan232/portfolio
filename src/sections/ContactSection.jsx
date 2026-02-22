import SectionTitle from "../components/SectionTitle";

const ContactSection = () => {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      <SectionTitle
        title="Contact"
        subtitle="Feel free to reach out for opportunities or collaboration"
      />

      <div className="space-y-3 text-gray-600">
        {/* Email */}
        <p>
          <b>Email:</b>{" "}
          <a
            href="mailto:sm0361436@gmail.com"
            className="text-blue-600 hover:underline"
          >
            sm0361436@gmail.com
          </a>
        </p>

        {/* GitHub */}
        <p>
          <b>GitHub:</b>{" "}
          <a
            href="https://github.com/MohammedIrfan232"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://github.com/MohammedIrfan232
          </a>
        </p>

        {/* LinkedIn */}
        <p>
          <b>LinkedIn:</b>{" "}
          <a
            href="https://linkedin.com/in/mohammed-irfan-s-282776353/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://linkedin.com/in/mohammed-irfan-s-282776353/
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;