import Link from "next/link";

const techTags = [
  "AWS / Azure OpenAI / GCP",
  "Kubernetes / Terraform / Kustomize",
  "Rust / Python / dbt",
  "SRE / Security Analytics",
];

const achievements = [
  {
    number: "01",
    headline: "可用性 99.95% を達成",
    description:
      "モノリス段階的分割と監視基盤刷新で、重大障害件数を前年比 62% 削減。",
  },
  {
    number: "02",
    headline: "デリバリー速度を 2.3 倍改善",
    description:
      "CI/CD ボトルネックを解消し、リリース頻度を週1回から日次へ移行。",
  },
  {
    number: "03",
    headline: "採用と育成を同時強化",
    description:
      "評価基準とオンボーディングを再設計し、立ち上がり期間を 45% 短縮。",
  },
];

const representativeProjects = [
  {
    period: "2024.01 - 2025.03",
    title: "プラットフォーム再設計",
    description:
      "認証・課金・権限を共通化する基盤を構築。12プロダクトの重複実装を解消し、開発工数を四半期あたり約1,100時間削減。",
  },
  {
    period: "2023.04 - 2023.12",
    title: "データ移行自動化",
    description:
      "旧基盤から新基盤への段階移行を自動化。検証パイプラインにより移行時の障害問い合わせを 70% 抑制。",
  },
  {
    period: "2022.07 - 2023.03",
    title: "コスト最適化プログラム",
    description:
      "ワークロード特性に合わせたリソース戦略へ変更。インフラコストを年間 2,400万円圧縮しつつ性能指標を維持。",
  },
];

const statsCards = [
  { label: "案件数", value: "20+" },
  { label: "主軸領域", value: "Cloud / Data / Security" },
  { label: "最近の役割", value: "Tech Lead / Platform" },
];

const projectRows = [
  {
    period: "2025.11-",
    title: "音声処理・分析システム インフラ基盤整備",
    description:
      "TerraformでAWS/マルチクラウド基盤を標準化し、EKS/GPU運用設計まで担当",
  },
  {
    period: "2025.04-2025.11",
    title: "セキュリティログ分析基盤開発",
    description:
      "OCSFログ正規化からOpenSearch/Analytics基盤の設計構築を主導",
  },
  {
    period: "2024.01-2025.03",
    title: "GISデータ解析エンジン開発",
    description:
      "Rustで大容量3D処理を高スループット化、空間インデックスとWasm拡張を実装",
  },
];

export default function Home() {
  return (
    <main style={{ backgroundColor: "var(--color-bg)" }}>
      {/* Hero Section */}
      <section
        style={{
          padding: "56px 64px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
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
              color: "var(--color-muted)",
              letterSpacing: "1.4px",
            }}
          >
            PROFILE RENEWAL CONCEPT
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              color: "var(--color-muted)",
            }}
          >
            Updated: 2026-05-24
          </span>
        </div>

        {/* Headline block */}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(64px, 9.2vw, 132px)",
              fontWeight: "400",
              lineHeight: "0.88",
              color: "#000000",
              margin: 0,
            }}
          >
            クラウド基盤と
            <br />
            データ処理を
            <br />
            設計する。
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "24px",
              fontWeight: "500",
              color: "#000000",
              margin: 0,
            }}
          >
            三瀬 裕二 / Software Engineer
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "18px",
              fontWeight: "400",
              color: "var(--color-muted)",
              lineHeight: "1.45",
              maxWidth: "760px",
              margin: 0,
            }}
          >
            採用担当が最初の60秒で把握すべき情報を先頭に再配置。
            <br />
            専門領域・実績規模・代表案件を一画面で理解できる構成へ刷新。
          </p>
        </div>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          {techTags.map((tag) => (
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

        {/* CTAs */}
        <div style={{ display: "flex", gap: "16px" }}>
          <button
            type="button"
            style={{
              backgroundColor: "#000000",
              padding: "12px 18px",
              border: "none",
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
              PDFをダウンロード
            </span>
          </button>
          <button
            type="button"
            style={{
              backgroundColor: "transparent",
              padding: "12px 18px",
              border: "1px solid #000000",
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
              GitHubを見る
            </span>
          </button>
        </div>
      </section>

      {/* Evidence Section */}
      <section
        style={{
          padding: "44px 64px",
          display: "flex",
          flexDirection: "column",
          gap: "36px",
          backgroundColor: "var(--color-bg)",
        }}
      >
        {/* Section intro */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              fontWeight: "500",
              color: "var(--color-muted)",
              letterSpacing: "1.6px",
            }}
          >
            PROFF PROFILE / ENGINEER
          </span>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "20px",
              fontWeight: "500",
              color: "#000000",
              margin: 0,
            }}
          >
            実績・職歴サマリー
          </p>
        </div>

        {/* Monumental headline — clipped container */}
        <div
          style={{
            overflow: "hidden",
            height: "250px",
            position: "relative",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 4.2vw, 60px)",
              fontWeight: "700",
              lineHeight: "0.86",
              color: "#000000",
              margin: 0,
              position: "absolute",
              left: "-36px",
              top: "22px",
            }}
          >
            採用判断に必要な実績を
            <br />
            先に読む。
          </h2>
        </div>

        {/* Summary line */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "24px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "18px",
              fontWeight: "500",
              color: "#000000",
              lineHeight: "1.45",
              maxWidth: "760px",
              margin: 0,
            }}
          >
            クラウドネイティブ開発・組織横断改善・高難度移行を軸に、事業成果へ直結するエンジニアリングを推進。
          </p>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              fontWeight: "400",
              color: "var(--color-muted)",
              letterSpacing: "1.2px",
              whiteSpace: "nowrap",
            }}
          >
            8+ YEARS / B2B SaaS / PLATFORM
          </span>
        </div>

        {/* Two-column evidence */}
        <div style={{ display: "flex", gap: "56px" }}>
          {/* Major Achievements */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                fontWeight: "400",
                color: "var(--color-muted)",
                letterSpacing: "1.4px",
              }}
            >
              主要実績
            </span>
            {achievements.map((item) => (
              <div
                key={item.number}
                style={{
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
                    color: "var(--color-muted)",
                    letterSpacing: "1.2px",
                  }}
                >
                  {item.number}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(24px, 2.5vw, 36px)",
                    fontWeight: "700",
                    lineHeight: "0.96",
                    color: "#000000",
                    margin: 0,
                  }}
                >
                  {item.headline}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    fontWeight: "400",
                    color: "#000000",
                    lineHeight: "1.5",
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Representative Projects */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                fontWeight: "400",
                color: "var(--color-muted)",
                letterSpacing: "1.4px",
              }}
            >
              代表プロジェクト要約
            </span>
            {representativeProjects.map((project) => (
              <div
                key={project.title}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  padding: "14px 0",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    fontWeight: "400",
                    color: "var(--color-muted)",
                    letterSpacing: "1.1px",
                  }}
                >
                  {project.period}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(22px, 2.2vw, 32px)",
                    fontWeight: "700",
                    lineHeight: "0.98",
                    color: "#000000",
                    margin: 0,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    fontWeight: "400",
                    color: "#000000",
                    lineHeight: "1.5",
                    margin: 0,
                  }}
                >
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Evidence label */}
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            fontWeight: "400",
            color: "var(--color-muted)",
            letterSpacing: "1.3px",
          }}
        >
          EVIDENCE
        </span>

        {/* Large EVIDENCE heading */}
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 4.7vw, 68px)",
            fontWeight: "400",
            lineHeight: "0.92",
            color: "#000000",
            margin: 0,
          }}
        >
          採用判断に必要な実績を
          <br />
          先に読む。
        </h2>

        {/* Stats cards */}
        <div style={{ display: "flex", gap: "20px" }}>
          {statsCards.map((card) => (
            <div
              key={card.label}
              style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
                border: "1px solid var(--color-border)",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  fontWeight: "400",
                  color: "var(--color-muted)",
                }}
              >
                {card.label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#000000",
                }}
              >
                {card.value}
              </span>
            </div>
          ))}
        </div>

        {/* Project list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <h3
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "24px",
              fontWeight: "600",
              color: "#000000",
              margin: 0,
            }}
          >
            代表プロジェクト
          </h3>
          {projectRows.map((project) => (
            <div
              key={project.title}
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid var(--color-border)",
                padding: "14px",
                display: "flex",
                gap: "14px",
                alignItems: "flex-start",
              }}
            >
              <div style={{ width: "180px", flexShrink: 0 }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    fontWeight: "400",
                    color: "var(--color-muted)",
                  }}
                >
                  {project.period}
                </span>
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#000000",
                  }}
                >
                  {project.title}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    fontWeight: "400",
                    color: "var(--color-muted)",
                    lineHeight: "1.4",
                  }}
                >
                  {project.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          backgroundColor: "#000000",
          padding: "48px 64px 56px 64px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              fontWeight: "400",
              color: "#FFFFFF",
              letterSpacing: "1.4px",
            }}
          >
            NEXT ACTION
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 5.4vw, 78px)",
              fontWeight: "400",
              lineHeight: "0.9",
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            詳細な職務経歴と成果を
            <br />
            すぐ確認できます。
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "18px",
              fontWeight: "400",
              color: "#F2F3F0",
              lineHeight: "1.45",
              maxWidth: "820px",
              margin: 0,
            }}
          >
            このリニューアル案では、プロフィールを"一覧"ではなく"意思決定用サマリー"として再設計しています。実案件の技術深度はPDF版で確認可能です。
          </p>
        </div>

        <div style={{ display: "flex", gap: "16px" }}>
          <button
            type="button"
            style={{
              backgroundColor: "#FCFAF7",
              padding: "12px 18px",
              border: "none",
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
              職務経歴書PDF
            </span>
          </button>
          <Link
            href="/career"
            style={{
              display: "inline-block",
              padding: "12px 18px",
              border: "1px solid #FCFAF7",
              textDecoration: "none",
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
              Contact / Interview
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
