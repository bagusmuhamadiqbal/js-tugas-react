import React from 'react'

export default function Nama({nama, nim, kel, prodi}) {
    return(
        <div style = {{ color : 'white'}}>
            <p>{nama}</p>
            <p>{nim}</p>
            <p>{kel}</p>
            <p>{prodi}</p>
        </div>
    )
}

export const list = [
    {
        nama:'Bagus Muhamad Iqbal',
        nim:'21120119120013',
        kel:'21',
        prodi:'Teknik Komputer',
    },
    {
        nama:'Bagus Muhamad Iqbal',
        nim:'21120119120013',
        kel:'21',
        prodi:'Teknik Komputer', 
    },
    {
        nama:'Bagus Muhamad Iqbal',
        nim:'21120119120013',
        kel:'21',
        prodi:'Teknik Komputer', 
    },
    {
        nama:'Bagus Muhamad Iqbal',
        nim:'21120119120013',
        kel:'21',
        prodi:'Teknik Komputer', 
    }
]