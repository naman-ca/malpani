import { getSettings, getCollection } from "@/lib/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export async function getStaticProps() {
  const site = await getSettings();
  const services = await getCollection("services");
  return { props: { site, services } };
}

export default function Services({ site, services }) {
  return (
    <>
      <Header site={site} />
      <Container>
        <h1 className="text-3xl font-bold mt-10">Services</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {services.map(s => (
            <a key={s.slug} href={`/services/${s.slug}`} className="rounded-2xl border p-5 hover:shadow-lg transition block">
              <div className="text-3xl">{s.icon || "📌"}</div>
              <div className="mt-2 font-semibold">{s.title}</div>
              <p className="text-gray-600 mt-1">{s.summary}</p>
            </a>
          ))}
        </div>
      </Container>
      <Footer site={site} />
    </>
  );
}
