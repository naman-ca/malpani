import Container from "./Container";

export default function Footer({ site }) {
  return (
    <footer className="mt-16 border-t bg-gray-50">
      <Container>
        <div className="py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} {site?.firmName || "Malpani & Dass Associates"}</div>
          <div className="flex items-center gap-4">
            <a href="/about" className="hover:text-brand">About</a>
            <a href="/contact" className="hover:text-brand">Contact</a>
            <a href="/blog" className="hover:text-brand">Articles</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
