import { profile } from '../data/content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="section-pad border-t border-line py-8">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 text-sm text-mist-faint sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.name}
        </p>
        <div className="flex flex-wrap gap-5">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-sage"
          >
            GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-sage"
          >
            LinkedIn
          </a>
          <a
            href={profile.links.website}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-sage"
          >
            Live site
          </a>
          <a
            href={profile.links.archive}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-sage"
          >
            Previous site
          </a>
          <span>{profile.location}</span>
        </div>
      </div>
    </footer>
  )
}
