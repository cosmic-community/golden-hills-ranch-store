import type { TeamMember } from '@/types'

interface TeamMemberCardProps {
  member: TeamMember
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const photoUrl = member.metadata?.photo?.imgix_url
  
  return (
    <div className="card overflow-hidden">
      <div className="flex flex-col sm:flex-row gap-6 p-6">
        <div className="flex-shrink-0">
          {photoUrl ? (
            <img
              src={`${photoUrl}?w=400&h=400&fit=crop&auto=format,compress`}
              alt={member.metadata.name}
              width={200}
              height={200}
              className="w-32 h-32 rounded-full object-cover"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-4xl">👤</span>
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-primary mb-2">
            {member.metadata.name}
          </h3>
          <p className="text-accent font-semibold mb-3">
            {member.metadata.role}
          </p>
          {member.metadata?.bio && (
            <p className="text-gray-700">
              {member.metadata.bio}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}