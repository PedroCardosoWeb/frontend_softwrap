import React, { useState, useEffect, useMemo } from 'react'
import * as S from './styles'

import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Table from '../../Components/Table'
import Form from '../../Components/Form'

import api from '../../services/api'

function Home() {
  const [data, setData] = useState([])
  const [upToDate, setUpToDate] = useState(false) // for update
  
  async function loadPeople(){
    await api.get('/people/')
    .then(response => {
      setData(response.data)
    })
  }

const columns = useMemo(
  () => [
    { Header: 'Nome', accessor: 'nome', width: 100},
    { Header: 'Idade', accessor: 'idade', width: 50},
    { Header: 'CPF', accessor: 'cpf', width: 120},
    { Header: 'Estado Civil',  accessor: 'estado_civil', width: 100},
    { Header: 'Cidade', accessor: 'cidade', width: 100},
    { Header: 'Estado', accessor: 'estado', width: 60}
    ],
[]
)

useEffect(() => {
      loadPeople()
      setUpToDate(false)
  }, [])

  return (
    <S.Container>
      <Header/>
          <Form />
        <S.Title>
          <h2>Registros</h2>  
        </S.Title>  
        <S.Content>

          <Table columns={columns} data={data}/>
        </S.Content>

      <Footer/>
    </S.Container>
  )
}
export default Home
