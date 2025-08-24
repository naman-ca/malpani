import Script from "next/script";

export default function Admin() {
  return (
    <>
      {/* Load Netlify Identity */}
      <Script
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        strategy="afterInteractive"
      />
      {/* Load Decap CMS */}
      <Script
        src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"
        strategy="afterInteractive"
      />
      {/* CMS root */}
      <div id="nc-root" />
      <style jsx global>{`
        html,
        body,
        #__next {
          height: 100%;
        }
        #nc-root {
          height: 100vh;
        }
      `}</style>
    </>
  );
}
