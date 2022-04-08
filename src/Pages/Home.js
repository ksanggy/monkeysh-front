import React from 'react';
import myPhoto from '../Assets/Images/my-photo.png';


function Home(props) {
    const fontColor = {color: "#FFC107"};
    const borderLine = {border: "2px solid yellow", width:"100vw", bottom:"19%", position:"absolute", zIndex:"1"};
    return (
        <div className="home">
            <div className="container d-flex flex-row align-items-center justify-content-center">
                <img src={myPhoto} alt="me"/>
                <div>
                    <h1>Lorem ipsum dolor sit amet consectetur <b style={fontColor}>adipisicing</b> elit. Nesciunt, necessitatibus soluta quod nisi, esse obcaecati eius, amet ducimus repudiandae omnis nemo doloremque. Laboriosam itaque sint, explicabo provident minus illo delectus?</h1>
                </div>
            </div>
            <hr style={borderLine}/>
        </div>
    );
}

export default Home;