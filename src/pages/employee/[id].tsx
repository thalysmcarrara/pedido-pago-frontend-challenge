import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { MdArrowBack, MdOutlineBadge } from 'react-icons/md'
import { FiUser, FiPhoneCall, FiCalendar } from 'react-icons/fi';
import { api } from '../../services/api';
import { Container, Hero, ProfileContainer, PersonalCardContainer } from './style';

export default function employee(props: any) {

  console.log(props)
  return (
    <Container>
      <div className='title-container'>
        <Link href="">
          <a><MdArrowBack /></a>
        </Link>
        <h1>Detalhes do colaborador</h1>
      </div>

      <Hero>
        <ProfileContainer>
          <div className='image-container'>
            <FiUser />
          </div>
          <div className='text-info-container'>
            <strong>Mothra Fernandes</strong>
            <span>mothrafernandes@gmail.com</span>
          </div>
        </ProfileContainer>

        <h2>Informações pessoais</h2>

        <PersonalCardContainer>
          <div className='card-info'>
            <div className='user-image'><MdOutlineBadge /></div>
            <div className='text-card-container'>
              <span>CPF</span>
              <strong>601 189 760 60</strong>
            </div>
          </div>

          <div className='card-info'>
            <div className='user-image'><FiPhoneCall /></div>
            <div className='text-card-container'>
              <span>Telefone</span>
              <strong>+55 89 2635 5467</strong>
            </div>
          </div>

          <div className='card-info'>
            <div className='user-image'><FiCalendar /></div>
            <div className='text-card-container'>
              <span>Nascimento</span>
              <strong>29/11/1990</strong>
            </div>
          </div>
        </PersonalCardContainer>
      </Hero>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }: any) => {
  const { id } = params;

  try {
    const result = await api.get(`/agent/${id}`).then((res) => res.data);

    return {
      props: {
        agent: result
      }
    }
  } catch {
    return {
      notFound: true
    }
  }
}