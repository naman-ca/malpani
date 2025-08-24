import Link from "next/link";
import Container from "./Container";
import { motion } from "framer-motion";

export default function Header({ site }) {
  return (
    <header className="bg-white/70 backdrop-blur sticky top-0 z-50 border-b">
      <Container>
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-2">
            <img src={site?.logo || "/logo-placeholder.png"} alt="Logo" className="h-9 w-9" />
            <div className="leading-tight">
              <div className="font-semibold">Malpani & Dass Associates</div>
              <div className="text-xs text-gray-500">{site?.tagline}</div>
            </div>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/services" className="hover:text-brand">Services</Link>
            <Link href="/blog" className="hover:text-brand">Blog</Link>
            <Link href="/about" className="hover:text-brand">About</Link>
            <Link href="/contact" className="hover:text-brand">Contact</Link>
            <a href="/admin" className="rounded-lg bg-brand px-3 py-1.5 text-white">Admin</a>
          </nav>
        </div>
        <motion.div
          className="h-1 bg-brand/20 rounded"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          style={{ transformOrigin: "0% 50%" }}
        />
      </Container>
    </header>
  );
}
