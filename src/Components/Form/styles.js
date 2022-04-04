import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Form = styled.div`
    width: 50%;
    margin-bottom: 50px;
`

export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 5px 0;
    icon: none;    

    span {
        color: #054375;
        margin: 5px 0;
        font-size: 20px;

    }
    select,
    input {
        font-size: 16px;
        padding: 15px;
        border: 1px solid #054375;

    }
`

export const Save = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    button {
        width: 40%;
        background: #054375;
        border: none;
        font-size: 20px;
        color: #FFF;
        font-weight: bold;
        padding: 10px;
        cursor: pointer;
        border-radius: 4px;

        &:hover{
            opacity: 0.6;
        }

    }
`