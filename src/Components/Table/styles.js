import styled from 'styled-components'

export const Table = styled.div`
table {
    font-size: 16px;
    border: 1px solid black;
    border-spacing: 0;
    margin-bottom: 100px;

   tr {
     :last-child {
       td {
         border-bottom: 0;
       }
     }
   }

   th,
   td {
     padding: 0.5rem;
     border-bottom: 1px solid black;
     border-right: 1px solid black;
     :last-child {
       border-right: 0;
     }
   }
  
   th {
     background: lightgrey;
     color: black;
     fontWeight: bold;
     font-size: 17px;
   }
 }
`


