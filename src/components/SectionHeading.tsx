type SectionHeadingProps = {
  id?: string
  eyebrow?: string
  title: string
  intro?: string
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'dark',
}: SectionHeadingProps) {
  return (
    <header className={`section-heading section-heading--${align} section-heading--${tone}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 id={id}>{title}</h2>
      {intro ? <p className="section-heading__intro">{intro}</p> : null}
    </header>
  )
}
