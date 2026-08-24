import {createFileRoute} from '@tanstack/react-router'
import {AboutPage} from "../ui/pages/AboutPage.tsx";

export const Route = createFileRoute('/about')({
    head: () => ({
        // 1. Meta tags (Title, Description, OpenGraph, Robots)
        meta: [
            {title: 'About Us | My App'},
            {name: 'description', content: 'Information about our super-project'},
            {name: 'robots', content: 'index, follow'},

            // Tags for social networks (for sharing the link)
            {property: 'og:title', content: 'About Us | My App'},
            {property: 'og:description', content: 'Information about our super-project'},
            {property: 'og:image', content: 'https://example.com/og-about.png'},
        ],
        // 2. Links (Favicon, Canonical URL, External Fonts)
        links: [
            {rel: 'canonical', href: 'https://example.com/about'},
            {rel: 'icon', href: '/favicon-about.ico'},
        ],
        // 3. Scripts (if you need a rare third-party script only on this page)
        scripts: [
            // {src: 'https://example.com/some-widget.js', async: true}
        ]
    }),
    component: AboutPage,
})