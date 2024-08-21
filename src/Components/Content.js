import React from 'react'
import "./Content.css"
import img1 from "./Images/focaccia.jpg"
import img2 from "./Images/pizza_margherita.jpg"
import img3 from "./Images/pizza_spinaci.jpg"
import img4 from "./Images/pizza-funghi.jpg"
import img5 from "./Images/pizza_salamino.jpg"
import img6 from "./Images/pizza_prosciutto.jpg"


const Content = () => {
    function change() {
        const state = document.getElementById("status")
        const time = new Date().getHours()
        if (time >= 10 && time <= 22) {
            state.innerText = "Opened"
            state.style.color = "green"
        } else {
            state.innerText = "Closed"
            state.style.color = "red"
        }
    }


    function buy1() {
        const stock = document.getElementById("food1")
        var txt = Number(stock.innerText)
        if (txt >= 1) {
            if (txt === 1) {
                stock.innerText = "Sold Out"
                stock.style.color = "red"
            }
            else {
                stock.innerText = txt - 1
            }
        }
    }
    function buy2() {
        const stock = document.getElementById("food2")
        var txt = Number(stock.innerText)
        if (txt >= 1) {
            if (txt === 1) {
                stock.innerText = "Sold Out"
                stock.style.color = "red"
            }
            else {
                stock.innerText = txt - 1
            }
        }
    }
    function buy3() {
        const stock = document.getElementById("food3")
        var txt = Number(stock.innerText)
        if (txt >= 1) {
            if (txt === 1) {
                stock.innerText = "Sold Out"
                stock.style.color = "red"
            }
            else {
                stock.innerText = txt - 1
            }
        }
    }
    function buy4() {
        const stock = document.getElementById("food4")
        var txt = Number(stock.innerText)
        if (txt >= 1) {
            if (txt === 1) {
                stock.innerText = "Sold Out"
                stock.style.color = "red"
            }
            else {
                stock.innerText = txt - 1
            }
        }
    }
    function buy5() {
        const stock = document.getElementById("food5")
        var txt = Number(stock.innerText)
        if (txt >= 1) {
            if (txt === 1) {
                stock.innerText = "Sold Out"
                stock.style.color = "red"
            }
            else {
                stock.innerText = txt - 1
            }
        }
    }
    function buy6() {
        const stock = document.getElementById("food6")
        var txt = Number(stock.innerText)
        if (txt >= 1) {
            if (txt === 1) {
                stock.innerText = "Sold Out"
                stock.style.color = "red"
            }
            else {
                stock.innerText = txt - 1
            }
        }
    }

    return (
        <div>
            <div className="stat">
                <button id="status" onClick={change}>CHECK STATUS</button>
            </div>
            <div className='menu'>
                <br></br>
                <p>OUR MENU</p>
            </div>

            <div>
                <center>
                    <p>Autentic Italian Cuisine. 6 creative dishes to choose from, All from <br></br>our stone oven, organic and finger licking delicious.</p>
                </center>
            </div>
            <div className='items'>
                <div className='item-r1'>
                    <div className='item1'>
                        <div className='img1'>
                            <img src={img1} alt='image' width={220} height={250}></img>
                        </div>
                        <div className='cont1'>
                            <h2>Focaccia</h2>
                            <p style={{ fontStyle: "italic", color: "grey" }}>Ingresients: Bread with italian olive oil and rosemary</p>
                            <br></br>
                            <p id='food1'>6</p>
                            <button onClick={buy1}>Buy Now</button>
                        </div>
                    </div>
                    <div className='item2'>
                        <div className='img2'>
                            <img src={img2} alt='image' width={220} height={250}></img>
                        </div>
                        <div className='cont2'>
                            <h2>Pizza Margherita</h2>
                            <p style={{ fontStyle: "italic", color: "grey" }}>Ingresients: Tomato and mozarella</p>
                            <br></br>
                            <p id='food2'>10</p>
                            <button onClick={buy2}>Buy Now</button>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>


                <br></br>
                <br></br>
                <div className='item-r2'>
                    <div className='item1'>
                        <div className='img3'>
                            <img src={img3} alt='image' width={220} height={250}></img>
                        </div>
                        <div className='cont3'>
                            <h2>Pizza Spinaci</h2>
                            <p style={{ fontStyle: "italic", color: "grey" }}>Ingresients: Tomato, Mozarella, spinach, and ricotta cheese</p>
                            <br></br>
                            <p id='food3'>12</p>
                            <button onClick={buy3}>Buy Now</button>
                        </div>
                    </div>
                    <div className='item2'>
                        <div className='img4'>
                            <img src={img4} alt='image' width={220} height={250}></img>
                        </div>
                        <div className='cont4'>
                            <h2>Pizza Funghi</h2>
                            <p style={{ fontStyle: "italic", color: "grey" }}>Ingresients: Tomato, Mozarella, mushroom, and onion</p>
                            <br></br>
                            <p id='food4'>12</p>
                            <button onClick={buy4}>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>



            <br></br>
            <br></br>
            <div className='item-r3'>
                <div className='item1'>
                    <div className='img5'>
                        <img src={img5} alt='image' width={220} height={250}></img>
                    </div>
                    <div className='cont5'>
                        <h2>Pizza Salamino</h2>
                        <p style={{ fontStyle: "italic", color: "grey" }}>Ingresients: Tomato, Mozarella, and pepperoni</p>
                        <br></br>
                        <p style={{ color: "red" }} id='food5'>Sold Out</p>
                        <button onClick={buy5}>Buy Now</button>
                    </div>
                </div>
                <div className='item2'>
                    <div className='img6'>
                        <img src={img6} alt='image' width={220} height={250}></img>
                    </div>
                    <div className='cont6'>
                        <h2>Pizza Prosciutto</h2>
                        <p style={{ fontStyle: "italic", color: "grey" }}>Ingresients: Tomato, Mozarella, ham, aragula, and burrata cheese</p>
                        <br></br>
                        <p id='food6'>18</p>
                        <button onClick={buy6}>Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Content
