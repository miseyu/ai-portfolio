import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, type ProjectDetail } from "../data/index";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const sectionPairs: [
    ProjectDetail["sections"][number],
    ProjectDetail["sections"][number] | null,
  ][] = [];
  for (let i = 0; i < project.sections.length; i += 2) {
    sectionPairs.push([
      project.sections[i],
      project.sections[i + 1] ?? null,
    ]);
  }

  return (
    <main
      style={{
        backgroundColor: "var(--color-bg)",
        display: "flex",
        flexDirection: "column",
        minHeight: "100dvh",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          padding: "52px 64px 36px 64px",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          backgroundColor: "#FCFAF7",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              fontWeight: "400",
              color: "#666666",
              letterSpacing: "1.4px",
            }}
          >
            PROJECT DETAIL
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              fontWeight: "400",
              color: "#666666",
            }}
          >
            {`from Timeline / ${project.period}`}
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(38px, 5vw, 68px)",
            fontWeight: "400",
            lineHeight: "0.9",
            color: "#000000",
            margin: 0,
            whiteSpace: "pre-line",
          }}
        >
          {project.title}
        </h1>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          {project.tags.map((tag) => (
            <div
              key={tag}
              style={{
                backgroundColor: "#000000",
                padding: "8px 14px",
                display: "inline-block",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  fontWeight: "400",
                  color: "#FFFFFF",
                }}
              >
                {tag}
              </span>
            </div>
          ))}
        </div>

        {/* Description */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "17px",
            fontWeight: "400",
            color: "#666666",
            lineHeight: "1.45",
            maxWidth: "900px",
            margin: 0,
          }}
        >
          {project.description}
        </p>
      </section>

      {/* Technical Detail Section */}
      <section
        style={{
          padding: "32px 64px",
          backgroundColor: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {/* Section header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "34px",
              fontWeight: "700",
              color: "#000000",
              margin: 0,
            }}
          >
            Project Technical Detail
          </h2>
        </div>

        {/* Cards grid */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {sectionPairs.map(([left, right]) => (
            <div
              key={left.title}
              style={{ display: "flex", gap: "16px" }}
            >
              <DetailCard section={left} />
              {right ? (
                <DetailCard section={right} />
              ) : (
                <div style={{ flex: 1 }} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Outcome & CTA Section */}
      <section
        style={{
          backgroundColor: "#000000",
          padding: "40px 64px 52px 64px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          flexGrow: 1,
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 4.2vw, 60px)",
            fontWeight: "400",
            lineHeight: "0.92",
            color: "#FFFFFF",
            margin: 0,
          }}
        >
          成果と再現性
        </h2>

        {/* Metrics */}
        <div style={{ display: "flex", gap: "16px" }}>
          {project.metrics.map((m) => (
            <div
              key={m.label}
              style={{
                flex: 1,
                backgroundColor: "#111111",
                border: "1px solid #2E2E2E",
                padding: "14px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  fontWeight: "400",
                  color: "#B8B9B6",
                }}
              >
                {m.label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#FFFFFF",
                }}
              >
                {m.value}
              </span>
            </div>
          ))}
        </div>

        {/* Context text */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "16px",
            fontWeight: "400",
            color: "#F2F3F0",
            lineHeight: "1.45",
            maxWidth: "920px",
            margin: 0,
          }}
        >
          {project.contextText}
        </p>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
          <button
            type="button"
            style={{
              backgroundColor: "#FCFAF7",
              border: "none",
              padding: "12px 18px",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                fontWeight: "600",
                color: "#000000",
              }}
            >
              この案件の詳細を面談で聞く
            </span>
          </button>
          <button
            type="button"
            style={{
              backgroundColor: "transparent",
              border: "1px solid #FCFAF7",
              padding: "12px 18px",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                fontWeight: "600",
                color: "#FFFFFF",
              }}
            >
              関連アーキテクチャ資料
            </span>
          </button>
        </div>

        {/* Back link */}
        <Link
          href="/career"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            fontWeight: "400",
            color: "#666666",
            textDecoration: "none",
            marginTop: "8px",
          }}
        >
          ← キャリアに戻る
        </Link>
      </section>
    </main>
  );
}

function DetailCard({
  section,
}: {
  section: ProjectDetail["sections"][number];
}) {
  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "var(--color-bg)",
        border: "1px solid var(--color-border)",
        borderRadius: "6px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "18px",
          fontWeight: "600",
          color: "#000000",
          margin: 0,
        }}
      >
        {section.title}
      </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        {section.lines.map((line) => (
          <p
            key={line}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: "400",
              color: "#666666",
              lineHeight: "1.6",
              margin: 0,
            }}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
