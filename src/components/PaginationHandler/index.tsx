import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { PaginationHandlerContainer, ArrowButtonLeft, ArrowButtonRight } from './style'

export default function PaginationHandler() {
  return (
    <PaginationHandlerContainer>
      <ArrowButtonLeft type="button">
        <MdChevronLeft />
      </ArrowButtonLeft>
      <span>1 de 10</span>
      <ArrowButtonRight type="button">
        <MdChevronRight />
      </ArrowButtonRight>
    </PaginationHandlerContainer>
  )
};