import React ,{ useState,useEffect } from 'react'
import { HeaderLinks } from '../utils/constants'
const Header = () => {
    const [header, setHeader] = useState(false)
    const changeHeaderColor = () =>{
        if(window.scrollY >= 80 ){
            setHeader(true)
        }
        else{
            setHeader(false)
        }
        }
    useEffect(() => {
        window.addEventListener('scroll', changeHeaderColor);
        return () => {
            window.removeEventListener('scroll', changeHeaderColor);
        };
    }, []);


  return (
<div className="container">
    <div className="row">
        <div className={header ? "header-active":"header"}>
            <div className='logo'>
                    <h1 className='logo-text'>
                        <a href={HeaderLinks.logo.url}className='link-item'>{HeaderLinks.logo.label}</a>
                    </h1>
            </div>
            <div className="links">
                {
                    HeaderLinks.middle.map((item) =>{
                        return (
                            <>
                                <a href={item.url} className='link-item'>
                                    <p className='link-item'>{item.label}</p>
                                </a>
                            </>
                        )
                    })
                }
            </div>

            <div className="contacts">
                {
                    HeaderLinks.contacts.map((item) =>(
                        <>
                            <a href={item.url} className='link-item'>
                                <p className='link-item'>{item.label}</p>
                            </a>
                        </>
                    ))
                }
            </div>
            </div>
        </div>
    </div>
  )
}

export default Header