import type { Metadata } from "next";
import { PrivacyPage } from "@/components/PrivacyPage";
import { getPrivacy } from "@/i18n/privacy";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("pt", { path: "privacy/", title: getPrivacy("pt").title });

export default function Privacy() {
  return <PrivacyPage locale="pt" />;
}
