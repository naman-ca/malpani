import { getSettings, getCollection } from "@/lib/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PostCard from "@/components/PostCard";

export async function getStaticProps() {
  const site = await getSettings();
  const posts = (await getCollection("articles"))
    .filter(p => !p.draft)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  return { props: { site, posts } };
}

export default function Blog({ site, posts }) {
  return (
    <>
      <Header site={site} />
      <Container>
        <h1 className="text-3xl font-bold mt-10">Articles</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {posts.map(p => <PostCard key={p.slug} post={p} />)}
        </div>
      </Container>
      <Footer site={site} />
    </>
  );
}
