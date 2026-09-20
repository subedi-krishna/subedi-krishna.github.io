/**
 * Project destination links.
 *
 * Each project may expose any combination of three destinations:
 *  - live   — an external live demo / deployed app
 *  - video  — a YouTube demo video (renders on an internal page, never a modal)
 *  - github — an external repository
 *
 * All links are optional. Missing keys (or a bare "#" sentinel) mean "no link".
 * The primary destination decides what the main project card click does; the
 * per-destination icons always offer the explicit choice.
 */

export type LinkType = 'live' | 'video' | 'github';

export interface ProjectLinks {
  live?: string;
  video?: string;
  github?: string;
}

export interface ProjectLike {
  slug: string;
  title: string;
  links?: ProjectLinks;
  primaryLink?: string;
}

export interface ResolvedLink {
  type: LinkType;
  /** For video: internal href. For live/github: external URL. */
  href: string;
  external: boolean;
  label: string;
}

const YOUTUBE_ID_PATTERN = /^[A-Za-z0-9_-]{11}$/;

/**
 * Extract a YouTube video ID from a URL, or null when it is not a usable
 * landscape-video URL. Accepts watch, youtu.be, /embed/, /v/ and /live/ forms.
 * Rejects /shorts/ on purpose: vertical video in a 16:9 player pillarboxes.
 */
export function getYouTubeId(url: string | undefined): string | null {
  if (!url || url === '#') return null;
  let id: string | null = null;
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^(www\.|m\.)/, '');
    if (host === 'youtu.be') {
      id = parsed.pathname.slice(1).split('/')[0] || null;
    } else if (host === 'youtube.com' || host === 'youtube-nocookie.com') {
      if (parsed.pathname === '/watch') {
        id = parsed.searchParams.get('v');
      } else {
        const match = parsed.pathname.match(/^\/(embed|v|live)\/([^/?#]+)/);
        if (match) id = match[2];
      }
    }
  } catch {
    return null;
  }
  return id && YOUTUBE_ID_PATTERN.test(id) ? id : null;
}

/**
 * The destinations a project actually offers, always in the order
 * live → video → github. Video hrefs are internal pages; the rest external.
 */
export function availableLinks(project: ProjectLike): ResolvedLink[] {
  const links = project.links ?? {};
  const out: ResolvedLink[] = [];

  if (links.live && links.live !== '#') {
    out.push({
      type: 'live',
      href: links.live,
      external: true,
      label: `Open the live demo of ${project.title} (opens in a new tab)`,
    });
  }

  const videoId = getYouTubeId(links.video);
  if (videoId) {
    out.push({
      type: 'video',
      href: `/projects/${project.slug}/video`,
      external: false,
      label: `Watch the demo video for ${project.title}`,
    });
  }

  if (links.github && links.github !== '#') {
    out.push({
      type: 'github',
      href: links.github,
      external: true,
      label: `View the source code for ${project.title} on GitHub (opens in a new tab)`,
    });
  }

  return out;
}

/**
 * What the main card click does. Honours an explicit primaryLink override;
 * otherwise takes the first available destination (live → video → github).
 * Returns null when the project has no usable links at all.
 */
export function resolvePrimary(project: ProjectLike): ResolvedLink | null {
  const available = availableLinks(project);
  if (available.length === 0) return null;
  if (project.primaryLink) {
    const override = available.find((link) => link.type === project.primaryLink);
    if (override) return override;
  }
  return available[0];
}

/**
 * Fail the build loudly on bad link data instead of silently hiding typos:
 * duplicate slugs, a primaryLink that points at a missing link, and malformed
 * video URLs all throw with the project named.
 */
export function validateProjects(projects: ProjectLike[]): void {
  const slugs = new Set<string>();
  for (const project of projects) {
    if (!project.slug || typeof project.slug !== 'string') {
      throw new Error(`[project-links] Project "${project.title}" is missing a slug.`);
    }
    if (slugs.has(project.slug)) {
      throw new Error(`[project-links] Duplicate project slug "${project.slug}".`);
    }
    slugs.add(project.slug);

    const links = project.links ?? {};
    if (project.primaryLink && !['live', 'video', 'github'].includes(project.primaryLink)) {
      throw new Error(
        `[project-links] Project "${project.title}" has an unknown primaryLink "${project.primaryLink}".`,
      );
    }
    if (project.primaryLink === 'live' && (!links.live || links.live === '#')) {
      throw new Error(
        `[project-links] Project "${project.title}" sets primaryLink "live" but has no live URL.`,
      );
    }
    if (project.primaryLink === 'github' && (!links.github || links.github === '#')) {
      throw new Error(
        `[project-links] Project "${project.title}" sets primaryLink "github" but has no GitHub URL.`,
      );
    }
    if (project.primaryLink === 'video' && !getYouTubeId(links.video)) {
      throw new Error(
        `[project-links] Project "${project.title}" sets primaryLink "video" but has no valid video URL.`,
      );
    }
    if (links.video && !getYouTubeId(links.video)) {
      throw new Error(
        `[project-links] Project "${project.title}" has an invalid YouTube URL: "${links.video}". ` +
          `Use a watch, youtu.be, embed, v or live URL with an 11-character video ID (no /shorts/ links).`,
      );
    }
  }
}
