import { getSettings, getOne } from "@/lib/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export async function getStaticProps() {
  const site = await getSettings();
  const page = await getOne("pages", "about");
  return { props: { site, page } };
}

export default function About({ site, page }) {
  return (
    <>
      <Header site={site} />
      <Container>
        <h1 className="text-3xl font-bold mt-10">{page.title}</h1>
        <article className="prose max-w-none mt-4" dangerouslySetInnerHTML={{ __html: page.body }} />
      </Container>
      <Footer site={site} />
    </>
  );
}
