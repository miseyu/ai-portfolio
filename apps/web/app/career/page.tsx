import Link from "next/link";

const badges = [
  "キャリア年数  7+ years",
  "関与案件  20+ projects",
  "注力領域  Cloud / Data / Security",
];

const timelineItems = [
  {
    period: "2025.04 - 現在",
    title: "グローバル決済基盤リニューアル",
    role: "テックリード / バックエンドアーキテクト",
    description:
      "マイクロサービス再設計、決済フローの冪等化、PCI DSS準拠の監査ログ基盤を主導。障害分析のためのトレーシングを導入し、決済失敗率を継続的に改善。",
    tags: ["Go", "gRPC", "PostgreSQL", "Kafka", "OpenTelemetry", "Terraform", "AWS"],
  },
  {
    period: "2023.10 - 2025.03",
    title: "SaaS分析ダッシュボード再構築",
    role: "フロントエンドリード",
    description:
      "旧SPAの段階的移行計画を策定し、デザインシステム統合とパフォーマンス改善を実施。主要画面の初期表示時間を短縮し、分析導線を再設計。",
    tags: ["TypeScript", "React", "Next.js", "TanStack Query", "Storybook", "Playwright", "Vercel"],
  },
  {
    period: "2022.01 - 2023.09",
    title: "製造業向け需要予測PoC→本番化",
    role: "データ基盤エンジニア",
    description:
      "データ収集パイプラインと特徴量管理を構築し、PoCモデルの本番運用化を担当。予測精度監視の運用設計とアラート基準を整備。",
    tags: ["Python", "dbt", "BigQuery", "Airflow", "Vertex AI", "Looker", "GitHub Actions"],
  },
  {
    period: "2020.07 - 2021.12",
    title: "大規模ECの注文管理刷新",
    role: "アプリケーションエンジニア",
    description:
      "モノリスからドメイン単位で段階移行し、注文・在庫連携の整合性を改善。運用部門と連携し、夜間バッチ依存を削減。",
    tags: ["Java", "Spring Boot", "MySQL", "Redis", "Docker", "Kubernetes"],
  },
];

export default function CareerPage() {
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
          職務経歴を時系列で確認する
        </h1>

        {/* Description */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "18px",
            fontWeight: "400",
            color: "var(--color-muted)",
            lineHeight: "1.45",
            maxWidth: "860px",
            margin: 0,
          }}
        >
          案件の背景、担った責任、技術判断、成果を一連の流れで把握できるように再構成。面談前の事前確認に適した詳細ページです。
        </p>

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
          backgroundColor: "var(--color-bg)",
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
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              fontWeight: "400",
              color: "var(--color-muted)",
              lineHeight: "1.6",
              margin: 0,
            }}
          >
            年次・案件・役割・技術スタックを時系列で整理した職務経歴
          </p>
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

      {/* Back link */}
      <div style={{ padding: "32px 64px 56px 64px" }}>
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            fontWeight: "400",
            color: "var(--color-muted)",
            letterSpacing: "1.2px",
            textDecoration: "none",
          }}
        >
          ← サマリーページへ戻る
        </Link>
      </div>
    </main>
  );
}
