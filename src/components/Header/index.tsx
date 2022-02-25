import { Container, LogoContainer, UserInfoContainer } from './style';
import Image from 'next/image';
import logo from '../../../public/images/logo.svg'

export default function Header() {
  return (
    <Container>
      <LogoContainer>
        <Image src={logo} height={30} width={30} />
      </LogoContainer>
      <UserInfoContainer>
        <div className='avatar-container'>
          <span>LZ</span>
        </div>
        <div className='name-container'>
          <strong>Luiz Zlochevsky</strong>
          <span>meus dados</span>
        </div>
      </UserInfoContainer>
    </Container>
  )
}