import { ItemsPerPageContainer } from './style';
import SelectDropdown from './SelectDropdown'

export default function ItemsPerPage() {
  return (
    <ItemsPerPageContainer>
      <span>Mostrando 10 de 50 registros</span>
      <SelectDropdown selectOptions={['10','15','20']}/>
    </ItemsPerPageContainer>
  )
}