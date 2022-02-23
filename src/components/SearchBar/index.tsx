import { MdSearch } from 'react-icons/md';
import { SearchBarContainer } from './style';

interface SearchBarProps {
  placeholderTextSearch: string
}

export default function SearchBar({ placeholderTextSearch }: SearchBarProps) {
  return (
    <SearchBarContainer>
      <legend>Pesquisar por</legend>
      <div>
        <MdSearch />
        <input type="text" placeholder={`Pesquise por ${placeholderTextSearch}`}/>
      </div>
    </SearchBarContainer>
  )
}