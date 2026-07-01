import { useTranslation } from "react-i18next";
import { PageHeader } from "./PageHeader";
import type { ReactNode } from "react";

/**
 * Convenience wrapper that resolves eyebrow / titlePre / titleAccent / description
 * from a translation namespace like "pages.about".
 */
export function TranslatedPageHeader({
  namespace,
  children,
}: {
  namespace: string;
  children?: ReactNode;
}) {
  const { t } = useTranslation();
  const eyebrow = t(`${namespace}.eyebrow`);
  const pre = t(`${namespace}.titlePre`);
  const accent = t(`${namespace}.titleAccent`);
  const description = t(`${namespace}.description`);
  return (
    <PageHeader
      eyebrow={eyebrow}
      title={
        <>
          {pre} <span className="text-gradient">{accent}</span>
        </>
      }
      description={description}
    >
      {children}
    </PageHeader>
  );
}
