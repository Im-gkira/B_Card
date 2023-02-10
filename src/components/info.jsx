import React from "react";

export default function Info(){
    return (
        <section className="info">
            <img className="profile--img" src="src/assets/hur.jpeg"></img>
            <h2>Gurkirat Singh</h2>
            <h5>Software Developer</h5>
            <h6>KieTsukishima</h6>

            <div className="btn-container">
                <button><i className="fa fa-solid fa-envelope"></i>Email</button>
                <button><i className="fa fa-brands fa-linkedin"></i>LinkedIn</button>
            </div>
        </section>
    )
}