import projectsJson from "./projects.json" with { type: "json" };
import timelineJson from "./timeline.json" with { type: "json" };

export type TimelineItem = {
  period: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  slug: string;
};

export type ProjectSection = {
  title: string;
  lines: string[];
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectDetail = {
  period: string;
  title: string;
  tags: string[];
  description: string;
  sections: ProjectSection[];
  metrics: ProjectMetric[];
  contextText: string;
};

export function getTimelineItems(): TimelineItem[] {
  return timelineJson as TimelineItem[];
}

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  const map = projectsJson as Record<string, ProjectDetail>;
  return map[slug];
}
