import React, { useRef } from "react"
import Title from "../../principals/Title"
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Button from "../../principals/Buttons"

function List(props) {
    const listaRef = useRef()

    function scroll(X) {
      listaRef.current.scrollBy({
        left: X,
        behavior: 'smooth',
      })
    }

    return (
        <div className='categoria'>
            <Title>Populares</Title>

            <div className='categoria-lista' ref={listaRef} >
                <Button className='botao-lista categoria-esquerda' onClick={() => scroll(-500)} ><MdOutlineKeyboardArrowLeft size={35} /></Button>
                {
                    props.moviesImg.map((movieImg, index) => {
                        return <>
                            <img src={movieImg} width="5rem" alt={index} />
                        </>
                    })
                }
                <Button className='botao-lista categoria-direita' onClick={() => scroll(500)}><MdOutlineKeyboardArrowRight className='icone' size={35} /></Button>

            </div>
        </div>
    )
}

export default List