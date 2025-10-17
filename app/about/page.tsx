import { getPageBySlug, getTeamMembers } from '@/lib/cosmic'
import TeamMemberCard from '@/components/TeamMemberCard'
import type { Page, TeamMember } from '@/types'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Golden Hills Ranch',
  description: 'Learn about our family-owned ranch, sustainable farming practices, and commitment to raising the highest quality grass-fed beef and dairy products.',
  openGraph: {
    title: 'About Golden Hills Ranch',
    description: 'Family-owned ranch committed to sustainable, humane farming practices.',
    images: [
      {
        url: 'https://imgix.cosmicjs.com/498d2400-ab08-11f0-8dcc-651091f6a7c0-photo-1500595046743-cd271d694d30-1760671250825.jpg?w=1200&h=630&fit=crop&auto=format,compress',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default async function AboutPage() {
  const aboutPage = await getPageBySlug('about-golden-hills-ranch')
  const teamMembers = await getTeamMembers()
  
  const typedPage = aboutPage as Page | null
  
  return (
    <div>
      {/* Hero Section */}
      {typedPage?.metadata?.hero_image && (
        <div className="relative h-96 bg-primary">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${typedPage.metadata.hero_image.imgix_url}?w=1600&h=768&fit=crop&auto=format,compress)`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/70 to-primary/70" />
          <div className="relative container-custom h-full flex items-center">
            <h1 className="text-5xl font-bold text-white">
              {typedPage.metadata.page_title}
            </h1>
          </div>
        </div>
      )}
      
      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          {typedPage ? (
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: typedPage.metadata.content }}
            />
          ) : (
            <div className="text-center py-16">
              <h1 className="text-4xl font-bold text-primary mb-4">About Golden Hills Ranch</h1>
              <p className="text-lg text-gray-600">
                Content coming soon...
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Team Section */}
      {teamMembers.length > 0 && (
        <section className="py-16 bg-earth-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-600">
                The passionate people behind Golden Hills Ranch
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member: TeamMember) => (
                <TeamMemberCard key={member.id} member={member as TeamMember} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}