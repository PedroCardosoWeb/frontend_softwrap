import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import * as S from './styles'

import api from '../../services/api';

function Form({match}){
        const [redirect, setRedirect] = useState(false);
        const [id, setId] = useState();
        const [nome, setNome] = useState();
        const [idade, setIdade] = useState();
        const [cpf, setCpf] = useState();
        const [estado_civil, setEstado_civil] = useState();
        const [cidade, setCidade] = useState();
        const [estado, setEstado] = useState();
        
    async function Save (){
        //validação
        if(!nome)
        return alert("Favor informar o nome")
        else if(!idade)
        return alert("Favor informar a idade")
        else if(!cpf)
        return alert("Favor informar o CPF")
        else if(!estado_civil)
        return alert("Favor informar o estado civil")
        else if(!cidade)
        return alert("Favor informar a cidade")
        else if(!estado)
        return alert("Favor informar o estado")
        
        // if(match.params.id){
        //     await api.put(`/people/${match.params.id}`, {
        //         nome,
        //         idade,
        //         estado_civil,
        //         cpf,
        //         cidade,
        //         estado
        //     })
        //     .then( () => 
        //     alert("Alteração realizada com sucesso!")
        //     )
        //     } else {
                await api.post('/people/', {
                        nome,
                        idade,
                        estado_civil,
                        cpf,
                        cidade,
                        estado
                    })
                    .then( () => 
                        alert("Cadastro realizado com sucesso!")
                    )    
                // }
        }

    async function Remove(){
        const res = window.confirm('Deseja realmente remover este cadastro?')
        if(res===true){
        await api.delete(`/people/${match.params.id}`)
            .then(() => 
            alert("Cadastro removido!")
            )
        } 
    }

    // useEffect(() => {
    //     LoadPeople();
    // }, [])

    return (
        <S.Container>
        <S.Form>
            <S.Input>
                <span>Nome</span>
                <input type="text" placeholder="Nome"
                onChange={e => setNome(e.target.value)}
                value={nome} />
            </S.Input>
            
            <S.Input>
                <span>Idade</span>
                <input type="number" placeholder="Idade"
                onChange={e => setIdade(e.target.value)}
                value={idade} />
            </S.Input>     

            <S.Input>
                <span>CPF</span>
                <input type="text" placeholder="CPF"
                onChange={e => setCpf(e.target.value)}
                value={cpf} />
            </S.Input>    

            <S.Input>
                <span>Estado Civil</span>
                <select id="estado_civil"
                placeholder='Selecione uma opção'                 
                onChange={e => setEstado_civil(e.target.value)}
                value={estado_civil}>
                    <option value="Solteiro(a)">Solteiro(a)</option>
                    <option value="Casado(a)">Casado(a)</option>
                    <option value="Divorciado(a)">Divorciado(a)</option>
                    <option value="Viúvo(a)">Viúvo(a)</option>
                </select>
            </S.Input>     

            <S.Input>
                <span>Cidade</span>
                <input type="text" placeholder="Cidade"
                onChange={e => setCidade(e.target.value)}
                value={cidade} />
            </S.Input>     

            <S.Input>
                <span>Estado</span>
                <select id="uf"
                placeholder="Selecione um estado:"
                onChange={e => setEstado(e.target.value)}
                value={estado}>
                    <option value="SP">SP</option>
                    <option value="MG">MG</option>
                    <option value="RJ">RJ</option>
                    <option value="ES">ES</option>
                </select>
            </S.Input>

            <S.Save>
                <button type="button" onClick={Save} >SALVAR</button>
            </S.Save>
        </S.Form>
        </S.Container>
    )
}
export default Form