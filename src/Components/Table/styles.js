import styled from 'styled-components'

export const Table = styled.div`
  padding: 1rem;
  position: relative;
  width: 600vw; 
  overflow-x: scroll;
  ${'' /* display: flex; */}

  @media only screen and (min-width: 600px) {
     display: flex;
     justify-content: center; 
     overflow-x: scroll;
  }  

  ${'' /* @media only screen and (max-width: 400px) {
     display: flex;
     justify-content: flex-start;   
  }   */}

.table {
  display: inline-block;
  border-spacing: 0;
  border: 1px solid black;
  margin-bottom: 90px;

  .tr {
    :last-child {
      .td {
        border-bottom: 0;
      }
    }
  }

  .th,
  .td {
    margin: 0;
    padding: 0.5rem;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    overflow-x: hidden;
    :last-child {
      border-right: 0;
    }
  }
}
`

// export const Table = styled.div`
// margin: 0 auto;
// align-items: center;
// justify-content: center;
// display: flex;
// ${'' /* flex-direction: column; */}

// table {
//     font-size: 16px;
//     border: 1px solid black;
//     border-spacing: 0;
//     margin-bottom: 100px;
//    tr {
//      :last-child {
//        td {
//          border-bottom: 0;
//        }
//      }
//    }

//    th,
//    td {
//      padding: 0.5rem;
//      border-bottom: 1px solid black;
//      border-right: 1px solid black;
//      :last-child {
//        border-right: 0;
//      }
//    }
  
//    th {
//      background: lightgrey;
//      color: black;
//      fontWeight: bold;
//      font-size: 17px;
//    }
//  }
//    .pagination {
//       ${'' /* position: relative;
//       padding-top: 430px; */}
//    }
// `


