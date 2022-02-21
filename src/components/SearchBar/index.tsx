import { MdSearch } from 'react-icons/md';
import { SearchBarContainer } from './style';

export default function SearchBar(): React.ReactElement {
  return (
    <SearchBarContainer>
      <legend>Pesquisar por</legend>
      <div>
        <MdSearch />
        <input type="text" placeholder='Pesquise por nome ou cpf'/>
      </div>
    </SearchBarContainer>
  )
}