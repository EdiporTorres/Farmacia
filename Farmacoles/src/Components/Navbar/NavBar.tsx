import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Farmacoles- Voce em primeiro lugar</div>

            <div className='flex gap-4'>
            <Link to='/home' className='hover:underline'>Inicio</Link>
            <Link to='/produto' className='hover:underline'>Produtos</Link>
              <Link to='/categorias'className='hover:underline'>Categorias</Link>
              <Link to='/cadastocategoria'className='hover:underline'>Cadastrar categoria de produto</Link>
              <Link to='/perfil'  className='hover:underline'>Perfil</Link>
              <div className='hover:underline'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar