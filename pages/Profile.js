import React from 'react'
import { list } from '../component/Nama'
import Nama from '../component/Nama'


export default function Profile() {
  return (
    <div
    style={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
    }}
    >
      <h1 style={{color:'white'}}>Profile</h1>
      <div>
        {list.map((item, index) => (
          <Nama key={index} nama={item.nama} nim={item.nim} kel={item.kel} prodi={item.prodi} />
        ))}
      </div>
    </div>
  )
}