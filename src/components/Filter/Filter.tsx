import React from "react";
import './Filter.css'

export function Filter(){
function handleSubmit(e: any){
    e.preventDefault()
}

    return (
        <div className="">
        <form onSubmit={handleSubmit} className='search-box'>
            <input className="input-search" placeholder='Search your Pokemon'/>
            <button className="button-search"/>
        </form>
        </div>
    )
}