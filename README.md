# Malpani & Dass Associates – Website

Stack: Next.js + Tailwind + Decap CMS (Netlify CMS).  
Admin: `/admin` (Netlify Identity + Git Gateway)

## Local
1. npm install
2. npm run dev
Open http://localhost:3000

## Deploy (Netlify)
- Push to GitHub
- New site from Git -> select repo
- Build cmd: npm run build, Publish: .next
- Enable Identity: Invite yourself
- Enable Git Gateway
- Set Allowed External Redirects: /admin
