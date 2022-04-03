import React, { useState, useEffect, useMemo } from 'react'
import * as S from './styles'

import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Table from '../../Components/Table'
import Form from '../../Components/Form'

import api from '../../services/api'

function Home() {
  const [data, setData] = useState([])
  
  async function loadPeople(){
    await api.get('/people/')
    .then(response => {
      setData(response.data)
    })
  }

const columns = useMemo(
  () => [
    { Header: 'Nome', accessor: 'nome'},
    { Header: 'Idade', accessor: 'idade'},
    { Header: 'CPF', accessor: 'cpf'},
    { Header: 'Estado Civil',  accessor: 'estado_civil'},
    { Header: 'Cidade', accessor: 'cidade'},
    { Header: 'Estado', accessor: 'estado'}
  ],
[]
)

useEffect(() => {
      loadPeople()
  }, [])

  return (
    <S.Container>
      <Header/>
        <S.Content>
          <Table columns={columns} data={data}/>
        </S.Content>
      <Footer/>
    </S.Container>
  )
}

export default Home
