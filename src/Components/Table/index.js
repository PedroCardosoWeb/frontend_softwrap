import React, { useState } from "react";
import { useTable, useBlockLayout, useExpanded, usePagination } from "react-table";
import * as S from './styles'
import api from '../../services/api'

export default function Table({ 
  columns, 
  data,
  // renderRowSubComponent,
  // fetchData,
  // loading,
  // pageCount: controlledPageCount
  }) 
  {
    // const [selectUpdDel, setSelectUpdDel] = useState()
    // verificar selectUpdDel para Action (update || delete) na função

    // function handleChanges(e){
    //   setSelectUpdDel(e.target.value)
    //   if(selectUpdDel === 'delete'){
    //     alert('del')
    //   } if(selectUpdDel === 'update'){
    //       alert('upd')
    //     } if(selectUpdDel === '--'){

    //       }
    // }

    // const options = [
    //   {
    //     label: "--",
    //     value: ""
    //   },      {
    //     label: "alterar",
    //     value: "update"
    //   },
    //   {
    //     label: "remover",
    //     value: "delete"
    //   }
    // ]
    
    async function Remove(match){
      const res = window.confirm('Deseja realmente remover este cadastro?')
      if(res===true){
      await api.delete(`/people/${match.params.id}`)
          .then(() => 
          alert("Cadastro removido!")
          )
      } 
    }

    const defaultColumn = React.useMemo(
      () => ({
        width: 150,
      }),
      []
    )

    const {
      getTableProps, 
      getTableBodyProps, 
      headerGroups, 
      rows, 
      prepareRow,
      // page,
      // canPreviousPage,
      // canNextPage,
      // pageOptions,
      // pageCount,
      // gotoPage,
      // nextPage,
      // previousPage,
      // setPageSize,
      // state: { pageIndex, pageSize }
    } = useTable({
      columns,
      data,
      defaultColumn,
      // initialState: { pageIndex: 2 },
      // manualPagination: true,
      // pageCount: controlledPageCount
    },
      useBlockLayout,
      // useExpanded,
      // usePagination
    );

    // React.useEffect(() => {
    //   fetchData({ pageIndex, pageSize })
    // }, [fetchData, pageIndex, pageSize])  

    return (
      <S.Table>

      <div {...getTableProps()} className="table">
      <div>
        {headerGroups.map(headerGroup => (
          <div {...headerGroup.getHeaderGroupProps()} className="tr">
            {headerGroup.headers.map(column => (
              <div {...column.getHeaderProps()} className="th">
                {column.render('Header')}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div {...getTableBodyProps()}>
        {rows.map(
          (row, i) => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className="tr">
                {row.cells.map(cell => {
                  return (
                    <div {...cell.getCellProps()} className="td">
                      {cell.render('Cell')}
                    </div>
                  )
                })}
                
                {/* <div className="select-container">
                  <select value={'selecione'} onChange={handleChanges}>
                    {options.map((option) => (
                      <option value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div> */}

              </div>
            )}
        )}
      </div>
    </div>
      </S.Table>
    )

  //   return (
  //     <>
  //     <S.Table>
  //       <table {...getTableProps()}>
  //         <thead>
  //           {headerGroups.map(headerGroup => (
  //             <tr {...headerGroup.getHeaderGroupProps()}>
  //               {headerGroup.headers.map(column => (
  //                 <th {...column.getHeaderProps()}>{column.render("Header")}</th>
  //               ))}
  //             </tr>
  //           ))}
  //         </thead>
  //         <tbody {...getTableBodyProps()}>
  //           {rows.map((row, i) => {
  //             prepareRow(row);
  //             return (
  //               <tr {...row.getRowProps()}>
  //                 {row.cells.map(cell => {
  //                   return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
  //                 })}
  //               </tr>
  //             );
  //           })}
  //         </tbody>
  //       </table>
  //       </S.Table>
        
  //     {/* <div className="pagination">
  //         <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
  //           {'<<'}
  //         </button>{' '}
  //         <button onClick={() => previousPage()} disabled={!canPreviousPage}>
  //           {'<'}
  //         </button>{' '}
  //         <button onClick={() => nextPage()} disabled={!canNextPage}>
  //           {'>'}
  //         </button>{' '}
  //         <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
  //           {'>>'}
  //         </button>{' '}
  //         <span>
  //           Page{' '}
  //           <strong>
  //             {pageIndex + 1} of {pageOptions.length}
  //           </strong>{' '}
  //         </span>
  //         <span>
  //           | Go to page:{' '}
  //           <input
  //             type="number"
  //             defaultValue={pageIndex + 1}
  //             onChange={e => {
  //               const page = e.target.value ? Number(e.target.value) - 1 : 0
  //               gotoPage(page)
  //             }}
  //             style={{ width: '100px' }}
  //           />
  //         </span>{' '}
  //         <select
  //           value={pageSize}
  //           onChange={e => {
  //             setPageSize(Number(e.target.value))
  //           }}
  //         >
  //           {[5, 10, 15, 20].map(pageSize => (
  //             <option key={pageSize} value={pageSize}>
  //               Show {pageSize}
  //             </option>
  //           ))}
  //         </select>
  //       </div> */}
  //     </>
  // );
}