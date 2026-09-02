import type { ArticleBlock } from "@/lib/content/articles";
import type { AppLocale } from "@/lib/utils";

export function ArticleBody({
  blocks,
  locale,
}: {
  blocks: ArticleBlock[];
  locale: AppLocale;
}) {
  return (
    <div className="prose-invert mx-auto max-w-3xl space-y-6">
      {blocks.map((block, index) =>
        block.type === "h2" ? (
          <h2 key={index} className="font-display pt-4 text-2xl font-semibold text-heading">
            {block[locale]}
          </h2>
        ) : (
          <p key={index} className="text-base leading-8 text-muted sm:text-[17px]">
            {block[locale]}
          </p>
        ),
      )}
    </div>
  );
}
