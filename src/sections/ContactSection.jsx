import SectionTitle from "../components/SectionTitle";

const ContactSection = () => {
  return (
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
            href="#"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            github.com/username
          </a>
        </p>

        <p>
          <b>LinkedIn:</b>{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/username
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
