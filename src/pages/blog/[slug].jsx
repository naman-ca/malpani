import { getSettings, getCollection, getOne } from "@/lib/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

function formatDate(dateString) {
  const dt = new Date(dateString);
  const dd = String(dt.getUTCDate()).padStart(2, "0");
  const mm = String(dt.getUTCMonth() + 1).padStart(2, "0");
  const yy = dt.getUTCFullYear();
  return `${dd}/${mm}/${yy}`;
}

export async function getStaticPaths() {
  const posts = await getCollection("articles");
  return {
    paths: posts.filter((p) => !p.draft).map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const site = await getSettings();
  const post = await getOne("articles", params.slug);
  return { props: { site, post } };
}

export default function Post({ site, post }) {
  return (
    <>
      <Header site={site} />
      <Container>
        <div className="text-xs text-gray-500 mt-10">{formatDate(post.date)}</div>
        <h1 className="text-3xl font-bold mt-1">{post.title}</h1>
        {post.cover && <img src={post.cover} alt="" className="mt-4 rounded-xl" />}
        <article
          className="prose max-w-none mt-6"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </Container>
      <Footer site={site} />
    </>
  );
}
