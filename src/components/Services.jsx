import React from 'react'
import './services.css'
// import {SVG} from '../assets/images/svg/image.svg'
const Services = () => {
  return (
    <div className="service_container">
      <div className="row">
            <div className="about">
                <h1 className='about_header'>Our Services</h1>
                <div className="services-inside">
                    <div className="left_about left_service">
                        {/* <img src='src\assets\images\svg\image.svg' /> */}
                        <svg stroke="white" fill="black" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="100" width="100" xmlns="http://www.w3.org/2000/svg"><path stroke="white" d="M0 0h24v24H0z" fill="black"></path><path d="M7 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0"></path><path d="M17 16v-8l4 8v-8"></path><path d="M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z"></path></svg>
                        <h1>Connecting</h1>
                        <p>Connecting local and international communities to effectively support and improve the lives of
                            orphaned and displaced children in Ethiopia through a comprehensive and transparent virtual information hub
                        </p>
                    </div>

                    <div className="left_about left_service">
                        {/* <img src='src\assets\images\svg\image.svg' /> */}
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="100" width="100" xmlns="http://www.w3.org/2000/svg"><path d="M14.0754 12.0285a2.5059 2.5059 0 0 0-2.506-2.506 2.5059 2.5059 0 0 0-2.5058 2.506 2.5059 2.5059 0 0 0 2.5059 2.5059 2.5059 2.5059 0 0 0 2.5059-2.506zm3.5317.0003a1.1559 1.1556 0 0 0-1.1558-1.1556 1.1559 1.1556 0 0 0-1.1559 1.1556 1.1559 1.1556 0 0 0 1.1559 1.1555 1.1559 1.1556 0 0 0 1.1558-1.1555zm4.7917 5.5103a1.1576 1.1564 0 0 0-1.1577-1.1564 1.1576 1.1564 0 0 0-1.1576 1.1564 1.1576 1.1564 0 0 0 1.1576 1.1564 1.1576 1.1564 0 0 0 1.1577-1.1564zM20.748 13.888a1.1534 1.157 0 0 0-1.1533-1.157 1.1534 1.157 0 0 0-1.1534 1.157 1.1534 1.157 0 0 0 1.1534 1.1571 1.1534 1.157 0 0 0 1.1533-1.157zm3.2512.0619a1.1542 1.1538 0 0 0-1.1542-1.1538 1.1542 1.1538 0 0 0-1.1542 1.1538 1.1542 1.1538 0 0 0 1.1542 1.1538 1.1542 1.1538 0 0 0 1.1542-1.1538zm-3.279-3.883a1.1561 1.1535 0 0 0-1.156-1.1535 1.1561 1.1535 0 0 0-1.1562 1.1535 1.1561 1.1535 0 0 0 1.1561 1.1535 1.1561 1.1535 0 0 0 1.1562-1.1535zm3.2798.045a1.1614 1.157 0 0 0-1.1614-1.157 1.1614 1.157 0 0 0-1.1613 1.157 1.1614 1.157 0 0 0 1.1613 1.1572A1.1614 1.157 0 0 0 24 10.1119zm-1.626-3.631a1.1575 1.1601 0 0 0-1.1575-1.16 1.1575 1.1601 0 0 0-1.1575 1.16 1.1575 1.1601 0 0 0 1.1575 1.1602A1.1575 1.1601 0 0 0 22.374 6.481zM11.6171.3832c-3.1098 0-6.029 1.2063-8.2197 3.3974C1.206 5.9822 0 8.9007 0 11.9998c0 3.109 1.2067 6.0279 3.3974 8.2193 2.2028 2.1922 5.1213 3.3978 8.2197 3.3978 2.578 0 5.0176-.8252 7.055-2.386l-1.4196-1.8524c-1.6263 1.246-3.5748 1.9048-5.6354 1.9048-2.4776 0-4.8112-.9641-6.5717-2.7154-1.748-1.7488-2.7118-4.0828-2.7118-6.568 0-2.4784.9645-4.812 2.7158-6.5703 1.7484-1.7488 4.0817-2.713 6.5677-2.713 2.058 0 4.0069.659 5.6365 1.9057l1.4179-1.854C16.6314 1.2083 14.1922.3831 11.617.3831Z"></path></svg>                        <h1>Connecting</h1>
                        <p>Connecting local and international communities to effectively support and improve the lives of
                            orphaned and displaced children in Ethiopia through a comprehensive and transparent virtual information hub
                        </p>
                    </div>

                    <div className="left_about left_service">
                        {/* <img src='src\assets\images\svg\image.svg' /> */}
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="100" width="100" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-width="2" d="M19,7 C19,7 14,14 6.5,14 C4.5,14 1,15 1,19 L1,23 L12,23 L12,19 C12,16.5 15,18 19,11 L17.5,9.5 M3,5 L3,2 L23,2 L23,16 L20,16 M11,1 L15,1 L15,3 L11,3 L11,1 Z M6.5,14 C8.43299662,14 10,12.4329966 10,10.5 C10,8.56700338 8.43299662,7 6.5,7 C4.56700338,7 3,8.56700338 3,10.5 C3,12.4329966 4.56700338,14 6.5,14 Z"></path></svg>                        <h1>Connecting</h1>
                        <p>Connecting local and international communities to effectively support and improve the lives of
                            orphaned and displaced children in Ethiopia through a comprehensive and transparent virtual information hub
                        </p>
                    </div>
                    {/* <div className="right_about">
                        <h1>Virtual Information Hub</h1>
                        <p>The goal of this information hub is to mobilize resources and support, connect local and international sponsors and donors with both private and public orphanages and community-based organizations working to reduce or prevent children from becoming orphaned, displaced, and homeless children and youths; and amplify donors and recipients organization,
                            and governmental interactions in this vital issue.</p>
                
                    </div> */}
                </div>
            </div>
        </div>
    </div> 
  )
}

export default Services