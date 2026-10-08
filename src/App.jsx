import { useEffect } from "react";

const profile = {
  name: "Irene Yerang Kim",
  title: "Incoming M.S. Student, STAI Lab, KAIST AI",
  email: "hs01151116@korea.ac.kr",
  photo: `${import.meta.env.BASE_URL}profile.jpeg`,
  links: [
    { label: "Email", href: "mailto:hs01151116@korea.ac.kr" },
    { label: "GitHub", href: "https://github.com/01tilinfinity" },
    { label: "Hugging Face", href: "https://huggingface.co/canho" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yerangirenekim" },
  ],
};

// Authors are rendered as a list; the author's own name is marked
// with { me: true } so it renders in bold.
const publications = [
  {
    tag: "W2",
    title:
      "E-SENS: Exclusion-Sensitive Penalization for Negative-Constraint Retrieval",
    authors: [
      { me: true, name: "Yerang Kim" },
      "Jiyoon Myung",
      "Joohyung Han",
    ],
    venue: "Grounding Language Models Workshop at EMNLP 2026",
    links: [{ label: "Paper", href: "https://arxiv.org/pdf/2608.30130" }],
  },
  {
    tag: "W1",
    title:
      "Structured Language Generation Model: Loss Calibration and Formatted Decoding for Robust Structure Prediction and Knowledge Retrieval",
    authors: [
      "Minho Lee",
      "Junghyun Min",
      { me: true, name: "Yerang Kim" },
      "Woochul Lee",
      "Yeonsoo Lee",
    ],
    venue: "New Frontiers in Information Retrieval Workshop at AAAI 2026",
    links: [{ label: "Paper", href: "https://arxiv.org/abs/2402.08971" }],
  },
  {
    tag: "C2",
    title:
      "K/DA: Automated Data Generation Pipeline for Detoxifying Implicitly Offensive Language in Korean",
    authors: [
      "Minkyeong Jeon",
      "Hyemin Jeong",
      { me: true, name: "Yerang Kim" },
      "Jiyoung Kim",
      "Jae Hyeon Cho",
      "Byung-Jun Lee",
    ],
    venue: "ACL 2025",
    links: [
      { label: "Paper", href: "https://aclanthology.org/2025.acl-long.1039/" },
    ],
  },
  {
    tag: "C1",
    title:
      "A Performance Analysis of Model Training Due to Different Batch Sizes in Synchronous Distributed Deep Learning Environments",
    authors: [
      { me: true, name: "Yerang Kim" },
      "Hyungjun Kim",
      "Heonchang Yu",
    ],
    venue: "Annual Conference of KIPS (ACK), 2023.11",
    links: [
      {
        label: "Paper",
        href: "https://www.manuscriptlink.com/society/kips/conference/ack2023/file/downloadSoConfManuscript/abs/KIPS_C2023B0454",
      },
    ],
  },
];

const education = [
  {
    org: "KAIST AI",
    period: "2027.03~2029.03 (Expected)",
    detail: "M.S. in Artificial Intelligence",
  },
  {
    org: "Korea University",
    period: "2020.03~2025.02",
    detail:
      "B.S. in Computer Science & Engineering, B.A. in Korean Language & Literature (GPA 4.06 / 4.5)",
  },
  {
    org: "Gyeonggi Academy of Foreign Languages",
    period: "2017.03~2020.02",
    detail: "High School Diploma, English Major / Chinese Secondary Major",
  },
];

const experience = [
  {
    org: "KAIST AI",
    period: "Present",
    detail: "Research Intern, STAI Lab",
  },
  {
    org: "Samsung SDS",
    period: "2025.01~2026.07",
    detail: "Software Engineer",
  },
  {
    org: "NCSOFT, NLP Center",
    period: "2023.09~2024.02",
    detail: "AI Research Intern",
  },
  {
    org: "DnCLab, Korea University",
    period: "2023.08~2023.12",
    detail: "Undergraduate Research Assistant",
  },
];

const awards = [
  {
    org: "Presidential Award",
    period: "2023",
    detail: "National IT Industry Promotion Agency (NIPA)",
  },
  {
    org: "Top Prize",
    period: "2024",
    detail: "NEXT 2024 Product Day",
  },
  {
    org: "Semester Honors",
    period: "4 semesters",
    detail: "Korea University",
  },
];

const activities = [
  {
    org: "AIKU (Korea University Deep Learning Society)",
    period: "2023 – 2024",
    detail: "Core Member, External Affairs Lead",
  },
];

function Authors({ authors }) {
  return (
    <p className="authors">
      {authors.map((a, i) => {
        const isMe = typeof a === "object" && a.me;
        const name = isMe ? a.name : a;
        return (
          <span key={`${name}-${i}`}>
            {isMe ? <strong>{name}</strong> : name}
            {i < authors.length - 1 ? ", " : ""}
          </span>
        );
      })}
    </p>
  );
}

function EntryList({ items }) {
  return (
    <div className="entry-list">
      {items.map((item) => (
        <div className="entry" key={`${item.org}-${item.period}`}>
          <div className="entry-head">
            <span className="entry-org">{item.org}</span>
            <span className="entry-period">{item.period}</span>
          </div>
          <p className="entry-detail">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}

function App() {
  useEffect(() => {
    document.title = `${profile.name} | Home`;
  }, []);

  return (
    <div className="container">
      <section className="header" id="top">
        <div className="header-photo">
          <a href="#top">
            <img src={profile.photo} alt={profile.name} />
          </a>
        </div>
        <div className="header-desc">
          <h1>{profile.name}</h1>
          <p>{profile.title}</p>
          <p className="email">{profile.email}</p>
          <p className="social">
            {profile.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
              >
                {l.label}
              </a>
            ))}
          </p>
        </div>
      </section>

      <section className="docs-section" id="about">
        <h4>About</h4>
        <p>
          Hello! I am an incoming M.S. student at the STAI Lab,{" "}
          <a href="https://gsai.kaist.ac.kr" target="_blank" rel="noreferrer">
            KAIST AI
          </a>
          . I received my B.S. in Computer Science &amp; Engineering and B.A. in
          Korean Language &amp; Literature from{" "}
          <a href="https://www.korea.ac.kr" target="_blank" rel="noreferrer">
            Korea University
          </a>
          . Previously, I worked as a Software Engineer at Samsung SDS and as an
          AI Research Intern at the NCSOFT NLP Center.
        </p>
        <p>
          My research interests lie in <b>Information Retrieval</b>,{" "}
          <b>Reasoning</b>, and <b>Agentic AI</b>.
        </p>
      </section>

      <section className="docs-section" id="publications">
        <h4>Publications</h4>
        <p className="section-note">
          <sup>‡</sup> indicates equal contribution. <b>Bold</b> indicates my
          name.
        </p>
        {publications.map((pub) => (
          <div className="paper" key={pub.title}>
            <p className="title">
              {pub.tag ? <span className="paper-tag">[{pub.tag}]</span> : null}{" "}
              <b>{pub.title}</b>
            </p>
            <Authors authors={pub.authors} />
            <p>
              <i>{pub.venue}</i>
            </p>
            {pub.links?.length ? (
              <div className="paper-buttons">
                {pub.links.map((l) => (
                  <a
                    className="button"
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </section>

      <section className="docs-section" id="education">
        <h4>Education</h4>
        <EntryList items={education} />
      </section>

      <section className="docs-section" id="experience">
        <h4>Work Experience</h4>
        <EntryList items={experience} />
      </section>

      <section className="docs-section" id="awards">
        <h4>Awards &amp; Honors</h4>
        <EntryList items={awards} />
      </section>

      <section className="docs-section" id="activities">
        <h4>Extracurricular Activities</h4>
        <EntryList items={activities} />
      </section>

      <div className="footer">
        <p>{profile.name}</p>
        <p>
          Based on{" "}
          <a
            href="https://faculty.washington.edu/msaveski/"
            target="_blank"
            rel="noreferrer"
          >
            Martin Saveski
          </a>
          ’s template
        </p>
      </div>
    </div>
  );
}

export default App;
