import React, { useState, useEffect } from 'react'
import * as S from './styles'

import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Table from '../../Components/Table'

import api from '../../services/api'

function Home() {
  const [data, setData] = useState([]);
  
  async function loadPeople(){
    await api.get('/people/')
    .then(response => {
      setData(response.data);
    })
  }

useEffect(() => {
      loadPeople()
  }, []);

  return (
    <S.Container>
      <Header/>
        
        <table>
          <thead>
            <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>CPF</th>
            <th>Estado Civil</th>
            <th>Cidade</th>
            <th>Estado</th>
            </tr>
          </thead>
          {
            data.map(people => (
              <S.Container>              
                <tbody>
                  <tr>
                    <td>{people.nome}</td>
                    <td>{people.idade}</td>
                    <td>{people.cpf}</td>
                    <td>{people.estado_civil}</td>
                    <td>{people.cidade}</td>
                    <td>{people.estado}</td>
                  </tr>
                </tbody>
              </S.Container>
            ))
          }
        </table>
               
      <Footer/>
    </S.Container>
  )
}

export default Home
