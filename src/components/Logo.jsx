import Image from "next/image";

export default function Logo({ src, alt }) {
  return (
    <div className="flex items-center gap-2">
      <Image src={src || "/logo-placeholder.png"} alt={alt || "Logo"} width={36} height={36} />
      <span className="font-semibold text-lg">Malpani & Dass</span>
    </div>
  );
}
