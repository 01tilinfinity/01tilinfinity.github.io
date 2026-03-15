import { useEffect, useState } from "react";

const navigation = [
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Career" },
  { href: "#papers", label: "Papers" },
  { href: "#builds", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const experiences = [
  {
    period: "2025 - Present",
    org: "Samsung SDS",
    role: "Software Engineer",
    summary:
      "Working on large-scale SPA migration for a financial channel system. Learned how to ship under constraints where reliability matters more than novelty.",
  },
  {
    period: "2023 - 2024",
    org: "NCSOFT NLP Center",
    role: "AI Research Intern",
    summary:
      "Ran experiments on financial-domain NER and tested how supervision changes structural understanding in stock-related language tasks.",
  },
  {
    period: "2023",
    org: "DnCLab, Korea University",
    role: "Undergraduate Research Assistant",
    summary:
      "Studied synchronous distributed deep learning and measured training behavior under different batch sizes.",
  },
];

const papers = [
  {
    year: "2026",
    title:
      "Structured Language Generation Model: Loss Calibration and Formatted Decoding for Robust Structure Prediction and Knowledge Retrieval",
    venue: "AAAI 2026 Workshop on Frontiers in Information Retrieval",
    note: "Structure prediction, decoding, knowledge retrieval",
    href: "https://arxiv.org/html/2402.08971v3",
  },
  {
    year: "2025",
    title:
      "K/DA: Automated Data Generation Pipeline for Detoxifying Implicitly Offensive Language in Korean",
    venue: "ACL 2025",
    note: "Korean detoxification data pipeline",
    href: "https://aclanthology.org/2025.acl-long.1039/",
  },
  {
    year: "2023",
    title: "동기식 분산 딥러닝 환경에서 배치 사이즈 변화에 따른 모델 학습 성능 분석",
    venue: "KIPS 2023",
    note: "Distributed deep learning performance",
    href: "https://www.manuscriptlink.com/society/kips/conference/ack2023/file/downloadSoConfManuscript/abs/KIPS_C2023B0454",
  },
];

const builds = [
  {
    title: "KoMo",
    subtitle: "Purifying Korean Offensive Language with RLHF",
    body:
      "Compared DPO-style training strategies for hate speech purification with KoAlpaca 5.8B and GPT-3.5 Turbo.",
    badge: "AIKU Project Excellence Prize",
  },
  {
    title: "Fake News Generation",
    subtitle: "Style transfer and low-resource generation",
    body:
      "Explored data augmentation and generation pipelines with KoAlpaca, KoBART, KoGPT2, and KcELECTRA.",
    badge: "AIKU Project Top Prize",
  },
  {
    title: "Attendance Is All You Need",
    subtitle: "Dense retrieval for educational search",
    body:
      "Mapped exam questions to textbook pages with retrieval-focused experimentation.",
    badge: "Research Project",
  },
];

const researchInterests = [
  "Reasoning in large language models",
  "Representation-reasoning alignment",
  "Human-AI alignment",
  "Data-centric AI",
];

const education = [
  {
    school: "Korea University",
    degree: "B.A. in Korean Language & Literature / B.S. in Computer Science & Engineering",
    period: "Mar 2020 - Feb 2025",
    detail: "GPA 4.06 / 4.5",
  },
  {
    school: "Gyeonggi Academy of Foreign Languages",
    degree: "High School Diploma, major in English and secondary major in Chinese",
    period: "Mar 2017 - Feb 2020",
    detail: "Academic Excellence Award",
  },
];

function App() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.title = "Yerang Kim";
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("hs01151116@korea.ac.kr");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch (_error) {
      setCopied(false);
    }
  };

  return (
    <div className="app-shell">
      <Header />
      <main className="page-shell">
        <Hero />

        <section className="section top-cv-section" id="education">
          <div className="section-title section-title-row">
            <div>
              <h2>Education &amp; Experience</h2>
            </div>
            <div className="skill-cloud skill-cloud-compact">
              {researchInterests.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="cv-grid">
            <div className="cv-column">
              <div className="cv-heading">
                <span className="section-kicker">Education</span>
              </div>
              {education.map((item) => (
                <article className="cv-card" key={`${item.school}-${item.period}`}>
                  <div className="cv-card-top">
                    <h3>{item.school}</h3>
                    <span>{item.period}</span>
                  </div>
                  <p>{item.degree}</p>
                  <small>{item.detail}</small>
                </article>
              ))}
            </div>
            <div className="cv-column" id="experience">
              <div className="cv-heading">
                <span className="section-kicker">Experience</span>
              </div>
              {experiences.map((item) => (
                <article className="cv-card" key={`${item.org}-${item.period}`}>
                  <div className="cv-card-top">
                    <h3>{item.org}</h3>
                    <span>{item.period}</span>
                  </div>
                  <p className="cv-role">{item.role}</p>
                  <small>{item.summary}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-title section-title-row">
            <div>
              <h2>Career</h2>
            </div>
          </div>
          <div className="experience-rail">
            {experiences.map((item) => (
              <article className="experience-card" key={`${item.org}-${item.period}`}>
                <div className="experience-topline">
                  <span>{item.period}</span>
                  <span>{item.role}</span>
                </div>
                <h3>{item.org}</h3>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="papers">
          <div className="section-title">
            <h2>Publications</h2>
            <p className="section-hint">💡 Click a title to view the paper.</p>
          </div>
          <div className="papers-panel">
            <div className="paper-list">
              {papers.map((paper) => (
                <article className="paper-card" key={`${paper.year}-${paper.title}`}>
                  <span className="paper-year">{paper.year}</span>
                  <h3>
                    <a href={paper.href} target="_blank" rel="noreferrer">
                      {paper.title}
                    </a>
                  </h3>
                  <p>{paper.venue}</p>
                  <small>{paper.note}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="builds">
          <div className="section-title section-title-row">
            <div>
              <h2>Projects</h2>
            </div>
          </div>
          <div className="build-grid">
            {builds.map((build) => (
              <article className="build-card" key={build.title}>
                <div className="build-head">
                  <h3>{build.title}</h3>
                  <span>{build.badge}</span>
                </div>
                <p className="build-subtitle">{build.subtitle}</p>
                <p>{build.body}</p>
              </article>
            ))}
            <article className="build-card build-card-highlight">
              <p className="feature-label">Education</p>
              <h3>Korea University</h3>
              <p className="build-subtitle">B.A. Korean Language & Literature / B.S. Computer Science & Engineering</p>
              <p>GPA 4.06 / 4.5, Mar 2020 - Feb 2025</p>
              <div className="mini-divider" />
              <h3>Activities & Awards</h3>
              <ul className="stack-list">
                <li>Presidential Award, NIPA, 2023</li>
                <li>NEXT 2024 Product Day Top Prize</li>
                <li>Semester Honors for 4 semesters</li>
                <li>AIKU core member and External Affairs lead</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section section-profile-box">
          <div className="terminal-panel">
            <div className="terminal-bar">
              <span />
              <span />
              <span />
            </div>
            <pre>
              <code>
                <span className="code-keyword">profile</span> {"{"}
                {"\n"}  <span className="code-property">name</span>:{" "}
                <span className="code-string">"Yerang Kim"</span>
                {"\n"}  <span className="code-property">school</span>:{" "}
                <span className="code-string">"Korea University"</span>
                {"\n"}  <span className="code-property">major</span>:{" "}
                <span className="code-string">"Computer Science & Engineering / Korean Language & Literature"</span>
                {"\n"}  <span className="code-property">role</span>:{" "}
                <span className="code-string">"Software Engineer @ Samsung SDS"</span>
                {"\n"}  <span className="code-property">gpa</span>:{" "}
                <span className="code-string">"4.06 / 4.5"</span>
                {"\n"}
                {"}"}
              </code>
            </pre>
          </div>
        </section>

        <section className="section cta-section" id="contact">
          <div className="cta-panel">
            <div>
              <h2>Contact</h2>
            </div>
            <div className="contact-stack">
              <a href="mailto:hs01151116@korea.ac.kr">hs01151116@korea.ac.kr</a>
              <a href="https://github.com/01tilinfinity" target="_blank" rel="noreferrer">
                github.com/01tilinfinity
              </a>
              <a href="https://huggingface.co/canho" target="_blank" rel="noreferrer">
                huggingface.co/canho
              </a>
              <a href="https://linkedin.com/in/yerangirenekim" target="_blank" rel="noreferrer">
                linkedin.com/in/yerangirenekim
              </a>
              <button className="copy-button" onClick={handleCopy} type="button">
                {copied ? "Email copied" : "Copy email"}
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand-lockup" href="#top">
        <span className="brand-text">
          <strong>Yerang Kim</strong>
        </span>
      </a>
      <nav className="site-nav" aria-label="Primary">
        {navigation.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-main">
        <p className="hero-kicker">Curriculum Vitae</p>
        <h1>Yerang Kim</h1>
        <p className="hero-role">Software Engineer @ Samsung SDS</p>
        <div className="hero-actions">
          <a className="button button-ghost" href="mailto:hs01151116@korea.ac.kr">
            hs01151116@korea.ac.kr
          </a>
          <a
            className="button button-ghost"
            href="https://github.com/01tilinfinity"
            target="_blank"
            rel="noreferrer"
          >
            github.com/01tilinfinity
          </a>
        </div>
      </div>
    </section>
  );
}

export default App;
