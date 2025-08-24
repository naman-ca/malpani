import { getSettings, getCollection, getOne } from "@/lib/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export async function getStaticPaths() {
  const services = await getCollection("services");
  return {
    paths: services.map((s) => ({ params: { slug: s.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const site = await getSettings();
  const service = await getOne("services", params.slug);
  return { props: { site, service } };
}

export default function Service({ site, service }) {
  return (
    <>
      <Header site={site} />
      <Container>
        <h1 className="text-3xl font-bold mt-10">{service.title}</h1>
        <article className="prose max-w-none mt-4" dangerouslySetInnerHTML={{ __html: service.body }} />
      </Container>
      <Footer site={site} />
    </>
  );
}
