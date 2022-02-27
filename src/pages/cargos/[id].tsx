import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { Container, Hero } from '../../styles/roleDetail';
import { RolePermissionsTable } from '../../components'
import { MdArrowBack } from 'react-icons/md'
import { api } from '../../services/api';
import { RoleDetailType } from '../../types';

interface RoleDetailProps {
  role: RoleDetailType
}

export default function RoleDetail({ role }: RoleDetailProps) {
  return (
      <Container>
        <div className="title-container">
          <Link href="/cargos">
            <a><MdArrowBack /></a>
          </Link>
          <h1>Cargos e permissões</h1>
        </div>

        <Hero>
          <h2>Dados do cargo</h2>

          <div className="roleDataContainer">
            <fieldset className="item-grid">
              <legend>Departamento</legend>
              <span>SAC</span>
            </fieldset>
            <fieldset className="item-grid">
              <legend>Cargo</legend>
              <span>Analista</span>
            </fieldset>
          </div>

          <h2 className="gap">Listagem de permisões</h2>

          <RolePermissionsTable roles={role.grouprules}/>
        </Hero>
      </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id }: any = params

  try {
    const result = await api.get(`/role/${id}`).then((response) => response.data)

    return {
      props: {
        role: result.role
      }
    }
  } catch {
    return {
      notFound: true
    }
  }
}