import Link from "next/link";
import { getTimelineItems } from "./data/index";

const badges = [
  "キャリア年数  7+ years",
  "関与案件  20+ projects",
  "注力領域  Cloud / Data / Security",
];

export default function CareerPage() {
  const timelineItems = getTimelineItems();
  return (
    <main style={{ backgroundColor: "var(--color-bg)" }}>
      {/* Detail Header */}
      <section
        style={{
          padding: "56px 64px 40px 64px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          backgroundColor: "var(--color-bg)",
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
              color: "var(--color-muted)",
              letterSpacing: "1.4px",
            }}
          >
            DETAILED CAREER HISTORY
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              fontWeight: "400",
              color: "var(--color-muted)",
            }}
          >
            閲覧想定: 採用担当 / 技術責任者
          </span>
        </div>

        {/* Large heading */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 5.1vw, 74px)",
            fontWeight: "400",
            lineHeight: "0.92",
            color: "#000000",
            margin: 0,
          }}
        >
          職務経歴
        </h1>

        {/* Badges */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
          {badges.map((badge) => (
            <div
              key={badge}
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
                {badge}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Timeline */}
      <section
        style={{
          padding: "40px 64px",
          backgroundColor: "#FFFFFF",
        }}
      >
        {/* Timeline header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            paddingBottom: "8px",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "38px",
              fontWeight: "700",
              color: "#000000",
              margin: 0,
            }}
          >
            Detailed Timeline
          </h2>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "var(--color-border)",
            marginBottom: "0",
          }}
        />

        {/* Timeline body */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {timelineItems.map((item, index) => (
            <div key={item.title}>
              {/* Timeline item */}
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  padding: "16px 0 0 0",
                }}
              >
                {/* Rail */}
                <div
                  style={{
                    width: "250px",
                    flexShrink: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      backgroundColor: "#000000",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#000000",
                    }}
                  >
                    {item.period}
                  </span>
                </div>

                {/* Content card */}
                <div
                  style={{
                    flex: 1,
                    backgroundColor: "#F5F3EF",
                    border: "1px solid var(--color-border)",
                    borderRadius: "6px",
                    padding: "18px 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {/* Title */}
                  {item.slug ? (
                    <Link
                      href={`/career/${item.slug}`}
                      style={{ textDecoration: "none" }}
                    >
                      <h3
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "22px",
                          fontWeight: "700",
                          color: "#000000",
                          margin: 0,
                        }}
                      >
                        {item.title}
                      </h3>
                    </Link>
                  ) : (
                    <h3
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "22px",
                        fontWeight: "700",
                        color: "#000000",
                        margin: 0,
                      }}
                    >
                      {item.title}
                    </h3>
                  )}

                  {/* Role */}
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "var(--color-muted)",
                      }}
                    >
                      担当:
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#000000",
                      }}
                    >
                      {item.role}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "var(--color-muted)",
                      lineHeight: "1.7",
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>

                  {item.slug && (
                    <Link
                      href={`/career/${item.slug}`}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "12px",
                        fontWeight: "400",
                        color: "#000000",
                        textDecoration: "none",
                        letterSpacing: "0.5px",
                      }}
                    >
                      詳細を見る →
                    </Link>
                  )}

                  {/* Tech tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {item.tags.map((tag) => (
                      <div
                        key={tag}
                        style={{
                          backgroundColor: "#EBEBEB",
                          border: "1px solid var(--color-border)",
                          borderRadius: "999px",
                          padding: "6px 10px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "12px",
                            fontWeight: "500",
                            color: "#000000",
                          }}
                        >
                          {tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider between items */}
              {index < timelineItems.length - 1 && (
                <div
                  style={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "var(--color-border)",
                    marginTop: "16px",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
