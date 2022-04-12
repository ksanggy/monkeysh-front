import React from 'react';
import myPhoto from '../Assets/Images/my-photo.png';


function Home(props) {
    const fontColor = {color: "#FFC107"};
    const borderLine = {border: "3px solid #FFC107", width:"100vw", bottom:"24%", position:"absolute", zIndex:"1"};
    const armBorderLine = {border: "3px solid #FFC107", width:"100vw", bottom:"29%", position:"absolute", zIndex:"1"};
    return (
        <div className="home">
            <div className="container d-flex flex-row align-items-center justify-content-center">
                <img src={myPhoto} alt="me"/>
                <div>
                    <h1>Lorem ipsum dolor sit amet consectetur <b style={fontColor}>adipisicing</b> elit. Nesciunt, necessitatibus soluta quod nisi, esse obcaecati eius, amet ducimus repudiandae omnis nemo doloremque. Laboriosam itaque sint, explicabo provident minus illo delectus?</h1>
                </div>
            </div>
            <hr style={borderLine}/>
            <hr style={borderLine}/>
            <hr style={borderLine}/>
            <hr style={armBorderLine}/>
            <hr style={armBorderLine}/>
            <hr style={armBorderLine}/>
        </div>
    );
}

export default Home;