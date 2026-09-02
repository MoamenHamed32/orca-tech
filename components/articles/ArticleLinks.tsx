import type { ArticleLink } from "@/lib/content/articles";
import { GithubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { Globe2 } from "lucide-react";

const icons = {
  github: GithubIcon,
  linkedin: LinkedInIcon,
  website: Globe2,
} as const;

export function ArticleLinks({
  links,
  className = "",
}: {
  links: ArticleLink[];
  className?: string;
}) {
  if (links.length === 0) return null;

  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {links.map((link) => {
        const Icon = icons[link.kind];
        return (
          <li key={`${link.kind}-${link.href}`}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-accent hover:text-heading"
            >
              <Icon size={14} />
              {link.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
