import { SelectContainer, DropdownContent } from './style';
import { MdExpandMore, MdClose } from 'react-icons/md';
import Link from 'next/link';

interface ActiveLinkMobileProps {
  currentPageName: string,
  nextPageName: string
  nextPageLink: string
}

export default function ActiveLinkMobile({ currentPageName, nextPageLink, nextPageName }: ActiveLinkMobileProps) {
  return (
    <SelectContainer>
      <summary>
        <span>{currentPageName}</span>
        <MdExpandMore className='control-expand-icon'/>
        <MdClose className='control-close-icon'/>
      </summary>
      <DropdownContent className='control-expand'>
        <Link href={nextPageLink}>
          <a><span>{nextPageName}</span></a>
        </Link>
      </DropdownContent>
    </SelectContainer>
  )
}
