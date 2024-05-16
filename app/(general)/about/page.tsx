import type { Metadata } from "next";


export const metadata: Metadata = {
 title: "Amilder's About Page",
 description: 'About Page of Amilder',
 keywords: ['About Page','Amilder','información','...'],
};


export default function AboutPage() {
  return (
      <span className="text-7xl">About Page</span>
  )
}
