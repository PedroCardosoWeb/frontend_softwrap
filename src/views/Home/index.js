import React, { useState, useEffect, useMemo } from 'react'
import * as S from './styles'

import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Table from '../../Components/Table'
import Form from '../../Components/Form'

import api from '../../services/api'

function Home() {
  const [data, setData] = useState([])
  // const [upToDate, setUpToDate] = useState(false) // for update
  const [selectUpdDel, setSelectUpdDel] = useState()
  
  function handleChanges(e){
    setSelectUpdDel(e.target.value)
    if(selectUpdDel === 'delete'){
      alert('delete')
      setSelectUpdDel('')
    } else if(selectUpdDel === 'update'){
        alert('update')
        setSelectUpdDel('')
      } else if(selectUpdDel === '--'){

      }
  }

  const options = [
    {
      label: "--",
      value: ""
    },      {
      label: "alterar",
      value: "update"
    },
    {
      label: "remover",
      value: "delete"
    }
  ]

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
    { Header: 'Estado', accessor: 'estado', width: 60},
    { Header: 'Ações', accessor: 'acoes', width: 90,
      Cell: () => (
      <div className="select-container" >
        <select value={'selecione'} onChange={handleChanges}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      )
    }
    ],
[handleChanges, options]
)

useEffect(() => {
      loadPeople()
      // setUpToDate(false)
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
