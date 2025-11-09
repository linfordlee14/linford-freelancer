import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Linford Musiyambodza | Linfy Tech Solutions",
  description: "Data analyst, cybersecurity professional, and founder helping conservation organizations and businesses turn data into impact.",
};

export default function About() {
  return (
    <div className="py-20">
      <div className="container max-w-4xl">
        <h1 className="text-5xl font-bold mb-8">About Me</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6">
            Hi, I'm <strong>Linford Musiyambodza</strong>, founder of <strong>Linfy Tech Solutions</strong>.
            Based in Cape Town, South Africa, I specialize in turning complex data into actionable insights
            for conservation organizations and businesses.
          </p>

          <p className="text-gray-700 mb-6">
            My journey began with the <strong>ALX Africa Data Science Programme</strong>, where I mastered
            Python, SQL, Power BI, Tableau, and cloud computing. I discovered my passion wasn't just in
            analyzing data—it was in using technology to solve real-world challenges, from protecting
            endangered wildlife to helping small businesses make smarter decisions.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">What I Believe</h2>
          <p className="text-gray-700 mb-6">
            <em>"I thrive on challenges and believe that technology can transform industries and improve lives."</em>
          </p>

          <p className="text-gray-700 mb-6">
            I combine technical expertise with a security-first mindset and a passion for social impact.
            Whether it's building an AI system to protect rhinos or creating dashboards that help nonprofits
            track donor impact, every project is driven by the goal of making a measurable difference.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">Experience Highlights</h2>
          <ul className="space-y-4 text-gray-700">
            <li><strong>RhinoGuardians:</strong> AI-powered anti-poaching system for wildlife conservation</li>
            <li><strong>ALX Africa Graduate:</strong> Data Science Programme with Explore AI Academy</li>
            <li><strong>DevPost Level 3:</strong> Multiple hackathon submissions in healthcare and conservation tech</li>
            <li><strong>Linfy Tech Solutions:</strong> Providing web development, data analytics, and cybersecurity services</li>
          </ul>

          <div className="mt-12 p-6 bg-primary/10 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
            <p className="mb-4">
              If you're a conservation organization, nonprofit, or business looking to leverage data and
              technology for impact, I'd love to hear from you.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-accent transition-colors"
            >
              Get in Touch →
            </a>
          </div>

          <div className="mt-8">
            <a
              href="/resume.pdf"
              download
              className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              📄 Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
