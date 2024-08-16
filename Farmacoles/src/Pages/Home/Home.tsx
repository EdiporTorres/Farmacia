import React from 'react';

function Home() {
  return (
    <>
      <div className="bg-white flex justify-center">
        <div className='container grid grid-cols-2 text-red-700'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>Seja bem-vindo!</h2>
            <p className='text-xl'>Compre conosco e consiga descontos magníficos</p>
            <div className="flex justify-around gap-4">
              <button className='rounded bg-red-700 text-white py-2 px-4'>Ver produtos</button>
            </div>
          </div>
          
          {/* Imagem temática de farmácia */}
          <div className="flex justify-center">
            <img 
              src="https://cdn.sistemawbuy.com.br/arquivos/d3ec7ae2e10b35291f4aef607b388854/produtos/64259487f25ed/prateleira-de-farma-cia-para-medicamentos-2-64259488aa2ac.jpg" // Substitua por uma URL válida
              alt="Farmácia"
              className='w-2/3' 
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
