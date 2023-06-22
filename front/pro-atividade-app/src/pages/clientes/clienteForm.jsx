import React from 'react'
import TitlePage from '../../components/TitlePage'
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function ClienteForm() {
    const history = useHistory();
    let { id } = useParams();

    const voltar = () => {
        history.push('/cliente/lista');
      } 

  return (
    <>
        <TitlePage title={'Cliente Detalhes ' + (id !== undefined ? id : '')}>
            <Button variant='outline-secondary' onClick={voltar}>
                <i className='fas fa-arrow-left me-2'></i>
                Voltar
            </Button>
        </TitlePage>        
    </>
  )
}