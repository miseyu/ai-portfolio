import Link from "next/link";
import type { CSSProperties } from "react";
import {
  getProjectBySlug,
  getTimelineItems,
  type ProjectDetail,
  type TimelineItem,
} from "./career/data/index";

const focusSlugs = [
  "audio-processing-infra",
  "security-log-analytics",
  "gis-data-engine",
  "video-ad-network-sre",
] as const;

const capabilityCards = [
  {
    label: "Platform",
    title: "クラウド基盤をコードで設計する",
    description:
      "AWS / GCP / Azure OpenAI Service をまたぐ構成、Kubernetes、Terraform、Kustomizeを使い、再現性のある実行基盤に落とし込みます。",
  },
  {
    label: "Data",
    title: "分析できる形までデータを運ぶ",
    description:
      "Security Lake、Athena、Glue、dbt、OpenSearchなどを組み合わせ、収集・正規化・検索・調査まで続くデータ基盤を整えます。",
  },
  {
    label: "Engine",
    title: "重い処理を実装で前に進める",
    description:
      "Rust、Go、Pythonを使い分け、大容量3Dデータ処理、配信API、解析パイプラインなど性能と運用を両立する実装を担います。",
  },
];

const careerSignals = [
  {
    label: "Career",
    value: "2010-",
    detail: "Web / Game / AdTech / Data / Cloud",
  },
  {
    label: "Projects",
    value: "20",
    detail: "timeline.json に掲載された職務案件",
  },
  {
    label: "Recent focus",
    value: "Cloud + Data",
    detail: "Security / GIS / AI infra / SRE",
  },
];

const themeTags = [
  "AWS",
  "Google Cloud",
  "Azure OpenAI Service",
  "Kubernetes",
  "Terraform",
  "Rust",
  "Go",
  "Python",
  "dbt",
  "OpenSearch",
];

const sectionStyle: CSSProperties = {
  padding: "56px clamp(20px, 5vw, 64px)",
};

const eyebrowStyle: CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "13px",
  color: "var(--color-muted)",
  letterSpacing: "1.4px",
};

const mutedTextStyle: CSSProperties = {
  color: "var(--color-muted)",
  lineHeight: "1.7",
  margin: 0,
};

function getFocusProjects(): Array<ProjectDetail & { slug: string }> {
  return focusSlugs.flatMap((slug) => {
    const project = getProjectBySlug(slug);
    return project ? [{ ...project, slug }] : [];
  });
}

export default function Home() {
  const timelineItems = getTimelineItems();
  const focusProjects = getFocusProjects();
  const latestProjects = timelineItems.slice(0, 5);

  return (
    <main style={{ backgroundColor: "var(--color-bg)", color: "#000000" }}>
      <section
        style={{
          ...sectionStyle,
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: "clamp(32px, 6vw, 80px)",
          alignItems: "end",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <span style={eyebrowStyle}>YUJI MISE / SOFTWARE ENGINEER</span>
            <span style={eyebrowStyle}>Cloud, Data Platform, SRE</span>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "18px" }}
          >
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(42px, 7vw, 96px)",
                fontWeight: "400",
                lineHeight: "0.92",
                margin: 0,
                maxWidth: "960px",
              }}
            >
              実装できる基盤設計者
            </h1>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 22px)",
                fontWeight: "600",
                lineHeight: "1.65",
                maxWidth: "860px",
                margin: 0,
              }}
            >
              マルチクラウドのインフラ、Kubernetes運用、データ分析基盤、Rustによる高負荷処理を、設計だけで終わらせず運用可能な形まで作ります。
            </p>
            <p
              style={{ ...mutedTextStyle, maxWidth: "760px", fontSize: "16px" }}
            >
              直近は音声処理・分析システムのEKS/GPU基盤、セキュリティログ分析基盤、GIS向け3Dデータ解析エンジンを担当。過去にはSRE、DMP、広告・ゲーム・モバイル領域まで横断しています。
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {themeTags.map((tag) => (
              <span
                key={tag}
                style={{
                  backgroundColor: "#000000",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  padding: "8px 12px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            <Link
              href="/career"
              style={{
                backgroundColor: "#000000",
                color: "#FFFFFF",
                fontWeight: "700",
                padding: "13px 18px",
                textDecoration: "none",
              }}
            >
              職務経歴を見る
            </Link>
            <Link
              href="/career"
              style={{
                border: "1px solid #000000",
                color: "#000000",
                fontWeight: "700",
                padding: "12px 17px",
                textDecoration: "none",
              }}
            >
              代表案件へ
            </Link>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid var(--color-border)",
            padding: "22px",
            display: "grid",
            gap: "18px",
          }}
        >
          {careerSignals.map((signal) => (
            <div key={signal.label} style={{ display: "grid", gap: "6px" }}>
              <span style={eyebrowStyle}>{signal.label}</span>
              <strong style={{ fontSize: "30px", lineHeight: "1" }}>
                {signal.value}
              </strong>
              <span style={{ ...mutedTextStyle, fontSize: "13px" }}>
                {signal.detail}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          ...sectionStyle,
          backgroundColor: "#FFFFFF",
          display: "grid",
          gap: "28px",
        }}
      >
        <SectionHeading
          eyebrow="READING OF THE TIMELINE"
          title="職務内容から見える、現在の強み"
          description="長く運用される基盤、データ処理、クラウドネイティブな実行環境を任されてきた経歴が中心です。"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "16px",
          }}
        >
          {capabilityCards.map((card) => (
            <article
              key={card.label}
              style={{
                border: "1px solid var(--color-border)",
                backgroundColor: "var(--color-bg)",
                padding: "22px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <span style={eyebrowStyle}>{card.label}</span>
              <h2
                style={{
                  fontSize: "22px",
                  lineHeight: "1.35",
                  margin: 0,
                }}
              >
                {card.title}
              </h2>
              <p style={{ ...mutedTextStyle, fontSize: "14px" }}>
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        style={{
          ...sectionStyle,
          display: "grid",
          gap: "30px",
        }}
      >
        <SectionHeading
          eyebrow="REPRESENTATIVE WORK"
          title="直近の代表案件"
          description="トップページでは、最新かつ現在の専門性を示す案件を優先して掲載します。詳細ページへ進むと、技術構成・担当領域・成果の文脈を確認できます。"
        />

        <div style={{ display: "grid", gap: "14px" }}>
          {focusProjects.map((project) => (
            <ProjectFeature key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section
        style={{
          ...sectionStyle,
          backgroundColor: "#000000",
          color: "#FFFFFF",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: "clamp(28px, 6vw, 72px)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <span style={{ ...eyebrowStyle, color: "#B8B9B6" }}>
            CAREER TIMELINE
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(34px, 5vw, 68px)",
              fontWeight: "400",
              lineHeight: "0.95",
              margin: 0,
            }}
          >
            最新案件から順に、担当の深さを読む
          </h2>
          <Link
            href="/career"
            style={{
              color: "#FFFFFF",
              border: "1px solid #FCFAF7",
              padding: "12px 16px",
              textDecoration: "none",
              fontWeight: "700",
              width: "fit-content",
            }}
          >
            全20件の職務経歴へ
          </Link>
        </div>

        <div style={{ display: "grid", gap: "12px" }}>
          {latestProjects.map((project) => (
            <TimelinePreview key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div style={{ display: "grid", gap: "12px", maxWidth: "920px" }}>
      <span style={eyebrowStyle}>{eyebrow}</span>
      <h2
        style={{
          fontSize: "clamp(28px, 4vw, 46px)",
          lineHeight: "1.18",
          margin: 0,
        }}
      >
        {title}
      </h2>
      <p style={{ ...mutedTextStyle, fontSize: "16px" }}>{description}</p>
    </div>
  );
}

function ProjectFeature({
  project,
}: {
  project: ProjectDetail & { slug: string };
}) {
  return (
    <article
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid var(--color-border)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
        gap: "18px",
        padding: "20px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <span style={eyebrowStyle}>{project.period}</span>
        <Link
          href={`/career/${project.slug}`}
          style={{
            color: "#000000",
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            letterSpacing: "0.8px",
            textDecoration: "none",
          }}
        >
          DETAIL →
        </Link>
      </div>
      <div style={{ display: "grid", gap: "12px" }}>
        <h3
          style={{
            fontSize: "clamp(22px, 3vw, 34px)",
            lineHeight: "1.16",
            margin: 0,
            whiteSpace: "pre-line",
          }}
        >
          {project.title}
        </h3>
        <p style={{ ...mutedTextStyle, fontSize: "15px" }}>
          {project.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              style={{
                border: "1px solid var(--color-border)",
                borderRadius: "999px",
                color: "#000000",
                fontSize: "12px",
                padding: "6px 10px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function TimelinePreview({ project }: { project: TimelineItem }) {
  return (
    <Link
      href={`/career/${project.slug}`}
      style={{
        border: "1px solid #2E2E2E",
        color: "#FFFFFF",
        display: "grid",
        gap: "8px",
        padding: "14px",
        textDecoration: "none",
      }}
    >
      <span style={{ ...eyebrowStyle, color: "#B8B9B6" }}>
        {project.period}
      </span>
      <strong style={{ fontSize: "17px", lineHeight: "1.35" }}>
        {project.title}
      </strong>
      <span style={{ color: "#D8D9D6", fontSize: "13px", lineHeight: "1.55" }}>
        {project.role}
      </span>
    </Link>
  );
}
