import Link, { LinkProps } from "next/link";
import { LinkContainer } from './style'

interface ActiveLinkProps extends LinkProps {
  name: string
  actualPath: string
  href: string
}

export default function ActiveLink({ actualPath, name, href}: ActiveLinkProps) {
  return (
    <LinkContainer actualPath={actualPath} componentPath={href}>
      <Link href={href}>
        <a>{name}</a>
      </Link>
    </LinkContainer>
  )
}