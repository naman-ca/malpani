import { getSettings, getCollection } from "@/lib/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PostCard from "@/components/PostCard";
import { motion } from "framer-motion";

export async function getStaticProps() {
  const site = await getSettings();
  const posts = (await getCollection("articles"))
    .filter(p => !p.draft)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);
  const services = await getCollection("services");
  return { props: { site, posts, services } };
}

export default function Home({ site, posts, services }) {
  return (
    <>
      <Header site={site} />
      <Container>
        <section className="py-14 text-center">
          <motion.h1
            className="text-3xl sm:text-5xl font-bold"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {site?.firmName || "Malpani & Dass Associates"}
          </motion.h1>
          <p className="mt-3 text-gray-600">{site?.tagline || "Trusted Chartered Accountants"}</p>
          <div className="mt-6 flex justify-center">
            <a href="/contact" className="rounded-xl bg-brand px-5 py-3 text-white">Get in touch</a>
          </div>
        </section>

        <section className="py-8">
          <h2 className="text-xl font-semibold mb-4">Our Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(s => (
              <a key={s.slug} href={`/services/${s.slug}`} className="rounded-2xl border p-5 hover:shadow-lg transition block">
                <div className="text-3xl">{s.icon || "📌"}</div>
                <div className="mt-2 font-semibold">{s.title}</div>
                <p className="text-gray-600 mt-1">{s.summary}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="py-8">
          <h2 className="text-xl font-semibold mb-4">Latest Articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map(p => <PostCard key={p.slug} post={p} />)}
          </div>
          <div className="mt-6">
            <a href="/blog" className="text-brand hover:underline">View all</a>
          </div>
        </section>
      </Container>
      <Footer site={site} />
    </>
  );
}
