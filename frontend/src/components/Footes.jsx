// import React from 'react';
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBIcon,
//   MDBBtn
// } from 'mdb-react-ui-kit';

// export default function Footes() {
//   return (
//     <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
//       <MDBContainer className='pt-4'>
//         <section className='mb-4'>
//           <MDBBtn
//             rippleColor="dark"
//             color='link'
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fab fa-facebook-f' />
//           </MDBBtn>

//           <MDBBtn
//             rippleColor="dark"
//             color='link'
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fa-twitter' />
//           </MDBBtn>

//           <MDBBtn
//             rippleColor="dark"
//             color='link'
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fa-google' />
//           </MDBBtn>

//           <MDBBtn
//             rippleColor="dark"
//             color='link'
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fa-instagram' />
//           </MDBBtn>

//           <MDBBtn
//             rippleColor="dark"
//             color='link'
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fa-linkedin' />
//           </MDBBtn>

//           <MDBBtn
//             rippleColor="dark"
//             color='link'
//             floating
//             size="lg"
//             className='text-dark m-1'
//             href='#!'
//             role='button'
//           >
//             <MDBIcon fab className='fa-github' />
//           </MDBBtn>
//         </section>
//       </MDBContainer>

//       <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
//         © 2020 Copyright:
//         <a className='text-dark' href='https://mdbootstrap.com/'>
//           MDBootstrap.com
//         </a>
//       </div>
//     </MDBFooter>
//   );
// }

















import React from "react";
function Footes(){
    return(
        <>
            <div className="footer" style={{backgroundImage: 'url("https://t4.ftcdn.net/jpg/05/00/76/75/360_F_500767502_AdezwSUsyb04l79RpV6zubKulRnIHpd0.jpg")', kgroundRepeat: "no-repeat"}}>
                <div className="container">
                    <div className="footer-top">
                        <ul id="foott" className="footer-list">
                            <li>
                                <p className="footer-list-title">Top destination</p>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Indonesia, Jakarta</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Maldives, Malé</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Australia, Canberra</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Thailand, Bangkok</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Morocco, Rabat</a>
                            </li>
                        </ul>
                        <ul id="foott1" className="footer-list">
                            <li>
                                <p className="footer-list-title">Categories</p>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Travel</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Lifestyle</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Fashion</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Education</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Food &amp; Drink</a>
                            </li>
                            </ul>
                        <ul id="foott2" className="footer-list">
                            <li>
                                <p className="footer-list-title">Quick links</p>
                            </li>
                            <li>
                                <a href="#" className="footer-link">About</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Contact</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Tours</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Booking</a>
                            </li>
                            <li>
                                <a href="#" className="footer-link">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                        <div className="footer-list">
                            <p className="footer-list-title">Get a newsletter</p>
                            <p className="newsletter-text">
                                For the latest deals and tips, travel no further than your inbox
                            </p>
                            <form action="" className="newsletter-form">
                                <input id="fooot" type="email" name="email" required="" placeholder="Email address" className="newsletter-input" fprocessedid="agrc3"/>
                                <button id="btn-down" type="submit" classNameName="btn-primary" fdprocessedid="k6ghlr">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <a href="#" className="logo">Tourest</a>
                        <p className="copyright">
                        © 2022 <a href="#" className="copyright-link">Project</a>. All Rights Reserved
                        </p>
                        <ul id="log" className="social-list">
                            <li>
                                <a href="#" className="social-link">
                                <ion-icon name="logo-facebook" role="img" className="md hydrated" aria-label="logo facebook"></ion-icon>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-link">
                                <ion-icon name="logo-twitter" role="img" className="md hydrated" aria-label="logo twitter"></ion-icon>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-link">
                                <ion-icon name="logo-instagram" role="img" className="md hydrated" aria-label="logo instagram"></ion-icon>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-link">
                                <ion-icon name="logo-linkedin" role="img" className="md hydrated" aria-label="logo linkedin"></ion-icon>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-link">
                                <ion-icon name="logo-google" role="img" className="md hydrated" aria-label="logo google"></ion-icon>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>    
    )
}        
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
//             {/* <div>
//                 <h1 id="footer">Our Sponsors...</h1>
//                 <div id="foot">
//                     <li className="foots"><a href="oyorooms.in"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Oyorooms-branding.svg/640px-Oyorooms-branding.svg.png" alt="oyo"/></a></li>
//                     <li className="foots"><a href="goibibo.com"><img src="https://connectgujarat.com/wp-content/uploads/2016/10/goibibo-logo.jpg" alt="goibibo"/></a></li>
//                     <li className="foots"><a href="goibibo.com"><img src="https://download.logo.wine/logo/Trivago/Trivago-Logo.wine.png" alt="trivago"/></a></li>
//                     <li className="foots"><a href="goibibo.com"><img src="https://www.logo.wine/a/logo/Expedia/Expedia-Logo.wine.svg" alt="Expedia"/></a></li>
//                 </div>
//             </div> */}
//         </>
//     )
// }

export default Footes;