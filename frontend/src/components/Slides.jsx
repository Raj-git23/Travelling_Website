import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Example = () => {
    const images = [
        "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fE5ldyUyMFlvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1529963183134-61a90db47eaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aWNlbGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZHViYWl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1555400038-63f5ba517a47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QmFsaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    ];

    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <span>Slide 1</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span>Slide 2</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>Slide 3</span>
                </div>
            </div>
        </Slide>
    );
};

export default Example;



// import React from 'react';
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';

// const spanStyle = {
//   // padding: '20px',
//   color: 'white',
//   // size: '25px'
//   fontsize:'100px',
//   fontweight:'Bold',
//   fontfamily:'Poppins'
// }

// const divStyle = {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   backgroundSize: 'cover',
//   repeat:' no-repeat center/cover',
//   height: '700px'
// }
// const slideImages = [
//   {
//     url: 'https://images.unsplash.com/photo-1550340499-a6c60fc8287c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
//     caption: 'Paris'
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fE5ldyUyMFlvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
//     caption: 'New York'
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aWNlbGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
//     caption: 'Greenland'
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
//     caption:'Taj Mahal'
//   },
//   {
//     url:'https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZHViYWl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
//     caption:'Dubai'
//   },
//   {
//     url:'https://images.unsplash.com/photo-1555400038-63f5ba517a47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QmFsaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
//     caption:'Bali'
//   }
// ];

// const Slideshow = () => {
//     return (
//       <div className="slide-container">
//         <Slide>
//          {slideImages.map((slideImage, index)=> (
//             <div key={index}>
//               <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
//                 <span style={spanStyle}>{slideImage.caption}</span>
//               </div>
//             </div>
//           ))} 
//         </Slide>
//       </div>
//     )
// }

// export {spanStyle,Slideshow,divStyle,slideImages};
// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   return showSlides
// }


// const Slide = () => {
//         <>
//             <div>
//                 <div id="slideshow-container">
//                     <div className="mySlides fade">
//                         <div className="numbertext">1 / 3</div>
//                         <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjBiZWRyb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" style="width:100%" />
//                         <div className="text">Caption Text</div>
//                     </div>

//                     <div classNameName="mySlides fade">
//                         <div className="numbertext">2 / 3</div>
//                         <img src="ihttps://images.unsplash.com/photo-1609766857041-ed402ea8069a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsJTIwYmVkcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60g" style="width:100%" />
//                         <div classNameName="text">Caption Two</div>
//                     </div>

//                     <div className="mySlides fade">
//                         <div className="numbertext">3 / 3</div>
//                         <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjBiZWRyb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" style="width:100%" />
//                         <div className="text">Caption Three</div>
//                     </div>
//                 </div>

                
//                 <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
//                 <a className="next" onclick="plusSlides(1)">&#10095;</a>
//                 <br />
//                 <div>
//                     <span className="dot" onclick="currentSlide(1)"></span>
//                     <span className="dot" onclick="currentSlide(2)"></span>
//                     <span className="dot" onclick="currentSlide(3)"></span>
//                 </div>
//             </div>
//         </>
//         return Slide;
// }

// export {plusSlides,currentSlide,showSlides,Slide};