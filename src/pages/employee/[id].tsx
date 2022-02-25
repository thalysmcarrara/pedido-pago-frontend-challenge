import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { MdArrowBack, MdOutlineBadge } from 'react-icons/md'
import { FiUser, FiPhoneCall, FiCalendar } from 'react-icons/fi';
import { api } from '../../services/api';
import { Container, Hero, ProfileContainer, PersonalCardContainer, DataOrgContainer } from '../../styles/employeeDetail';
import { EmployeeDetailCard } from '../../components';

interface EmployeeProps {
  agent: {
    name: string,
    email: string,
    phone: {
      ddd: string,
      ddi: string,
      number: string
    },
    birth_date: string,
    document: {
      type: string,
      number: string
    },
    image: string,
    department: string,
    branch: string,
    role: string,
    status: string
  }
}

export default function employee({ agent }: EmployeeProps) {
  const { phone: { ddd, ddi, number } } = agent;

  return (
    <Container>
      <div className='title-container'>
        <Link href="/">
          <a><MdArrowBack /></a>
        </Link>
        <h1>Detalhes do colaborador</h1>
      </div>

      <Hero>
        <ProfileContainer>
          { agent.image ? <div className='profile-image'><img src={agent.image}/></div> : <div className='image-container'><FiUser /></div>}
          <div className='text-info-container'>
            <strong>{agent.name}</strong>
            <span>{agent.email}</span>
          </div>
        </ProfileContainer>

        <h2>Informações pessoais</h2>

        <PersonalCardContainer>
          <div className='card-info'>
            <div className='user-image'><MdOutlineBadge /></div>
            <div className='text-card-container'>
              <span>{agent.document.type}</span>
              <strong>{agent.document.number}</strong>
            </div>
          </div>

          <div className='card-info'>
            <div className='user-image'><FiPhoneCall /></div>
            <div className='text-card-container'>
              <span>Telefone</span>
              <strong>{`+${ddi} ${ddd} ${number}`}</strong>
            </div>
          </div>

          <div className='card-info'>
            <div className='user-image'><FiCalendar /></div>
            <div className='text-card-container'>
              <span>Nascimento</span>
              <strong>{agent.birth_date}</strong>
            </div>
          </div>
        </PersonalCardContainer>
        <DataOrgContainer>
          <h2>Dados oganizacionais</h2>

          <div className='dropdown-container'>
            <EmployeeDetailCard legend='Departamento' value={agent.department}/>
            <EmployeeDetailCard legend='Cargo' value={agent.role}/>
            <EmployeeDetailCard legend='Unidade' value={agent.branch}/>
            <EmployeeDetailCard legend='Status' value={agent.status}/>
          </div>
        </DataOrgContainer>
      </Hero>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }: any) => {
  const { id } = params;

  try {
    const result = await api.get(`/agent/${id}`).then((res) => res.data);

    const date = new Date(result.agent.birth_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })

    const agent = {
      ...result.agent,
      birth_date: date
    }

    return {
      props: {
        agent
      }
    }
  } catch {
    return {
      notFound: true
    }
  }
}