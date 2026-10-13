import type { Metadata } from "next";
import { Document } from "@/components/Document";
import { pageMetadata } from "@/lib/metadata";

// Root layout for the default language (Portuguese, served at "/").
export const metadata: Metadata = pageMetadata("pt");

export default function PortugueseLayout({ children }: { children: React.ReactNode }) {
  return <Document locale="pt">{children}</Document>;
}
