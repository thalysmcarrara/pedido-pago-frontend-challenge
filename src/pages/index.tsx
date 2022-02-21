import { useRouter } from 'next/router';
import { Container, Hero } from './style.home';
import { ActiveLink, SearchBar } from '../components';

export default function Home() {
  const { asPath } = useRouter();

  return (
      <Container>
        <h1>Organização</h1>
        <Hero>
          <nav>
            <ActiveLink name="Colaboradores" href='/' actualPath={asPath}/> 
            <ActiveLink name='Cargos' href='/cargos' actualPath={asPath}/>
          </nav>

          <SearchBar />
        </Hero>
      </Container>
  )
}
