import React from "react"
import ReactDOM from "react-dom"

function Header(){
    return(
        <header>
            <nav>
                <img src={require("./logo.png")} width={"40px"} />
            </nav>
        </header>
    )
}
function MainContent(){
    return(
        <div>
            <h1>Que me esta gustando de react</h1>
            <ol>
                <li>Es muy facil de usar</li>
                <li>El codigo es reutilizable cuando creamos componentes</li>
                <li>Es de las librerias más populares</li>
            </ol>
        </div>
    )
}

function Footer(){
    return(
        <footer>
            <small>2022 Nath Developer. All rights reserved.</small>
        </footer>
    )
}

function Page(){
    return(
        <React.Fragment>
        <Header />
        <MainContent />
        <Footer />
        </React.Fragment>

    )
}

ReactDOM.render(<Page />,document.getElementById("root"))