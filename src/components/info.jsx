import React from "react";

export default function Info(){
    return (
        <section className="info">
            <img className="profile--img" src=".\src\assets\react.svg"></img>
            <h2>Gurkirat Singh</h2>
            <h5>Software Developer</h5>
            <h6>random.text</h6>

            <div className="btn-container">
                <button>Email</button>
                <button>LinkedIn</button>
            </div>
        </section>
    )
}