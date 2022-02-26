import { SelectContainer, DropdownContent } from './style';
import { MdExpandMore, MdClose } from 'react-icons/md';
import Link from 'next/link';

export default function ActiveLinkMobile() {
  return (
    <SelectContainer>
      <summary>
        <span>Colaboradores</span>
        <MdExpandMore className='control-expand-icon'/>
        <MdClose className='control-close-icon'/>
      </summary>
      <DropdownContent className='control-expand'>
        <a href=""><span>Cargos</span></a>
      </DropdownContent>
    </SelectContainer>
  )
}
