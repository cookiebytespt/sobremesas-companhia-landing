import { asset } from "@/lib/asset";
import { Icon } from "./Icon";

const tints = ["bg-po", "bg-merengue", "bg-[#ece4da]", "bg-acucar"];

// Shows the photo when available, otherwise a soft placeholder carrying the caption.
export function Photo({
  src,
  alt,
  className = "",
  tint = 0,
  icon = "whisk",
}: {
  src?: string;
  alt: string;
  className?: string;
  tint?: number;
  icon?: string;
}) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={asset(src)} alt={alt} loading="lazy" className={`object-cover ${className}`} />;
  }
  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex flex-col items-center justify-center gap-3 p-6 text-center text-cacau/70 ${tints[tint % tints.length]} ${className}`}
    >
      <Icon name={icon} className="h-9 w-9 text-po-fundo" />
      <span className="max-w-[18ch] text-sm leading-snug">{alt}</span>
    </div>
  );
}
