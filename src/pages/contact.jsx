import { getSettings, getOne } from "@/lib/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export async function getStaticProps() {
  const site = await getSettings();
  const page = await getOne("pages", "contact");
  return { props: { site, page } };
}

export default function Contact({ site, page }) {
  return (
    <>
      <Header site={site} />
      <Container>
        <h1 className="text-3xl font-bold mt-10">{page.title}</h1>
        <div className="mt-4 grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border p-5">
            <div><strong>Email:</strong> {page.email}</div>
            <div className="mt-1"><strong>Phone:</strong> {page.phone}</div>
            <div className="mt-1"><strong>Address:</strong> {page.address}</div>
            <article className="prose max-w-none mt-4" dangerouslySetInnerHTML={{ __html: page.body }} />
          </div>
          <form className="rounded-2xl border p-5 space-y-3" onSubmit={(e)=>e.preventDefault()}>
            <input placeholder="Your name" className="w-full border rounded-lg px-3 py-2" />
            <input placeholder="Email or phone" className="w-full border rounded-lg px-3 py-2" />
            <textarea placeholder="Message" rows="5" className="w-full border rounded-lg px-3 py-2"></textarea>
            <button className="rounded-lg bg-brand px-4 py-2 text-white">Send</button>
          </form>
        </div>
      </Container>
      <Footer site={site} />
    </>
  );
}
