import React,{useState,useEffect} from 'react'
import "./subheader.css"

export default function Subheader() {

     // making state
     let [hover, setHover] = useState(false)
    
     //inline style attrubute takes an object ;
        let myStyles = {
           backgroundColor :"grey"
        }
        let hoverstyle = {
            border:hover ?"1px solid black" :"none"
        }
    
        const handleHoverin = () => {
            setHover(true)
        }
        const handleHoverout = () => {
            setHover(false)
        }
    
        useEffect(() => {
            let subheader = document.querySelector(".subheader")
            console.log(subheader.children);
            let childofSubheader = subheader.children;
            for (let i = 0; i < childofSubheader.length; i++){
                childofSubheader[i].addEventListener("mouseenter", () => {
                    // childofSubheader[i].style.border="1px solid black"
                    childofSubheader[i].style.backgroundColor = "orange";
                })
            }

            for (let i = 0; i < childofSubheader.length; i++){
                childofSubheader[i].addEventListener("mouseout", () => {
                    // childofSubheader[i].style.border="1px solid black"
                    childofSubheader[i].style.backgroundColor = "lightgray";
                })
            }
    
        },[])
    
    return (
        <>
        <div class="subheader">
            <div>All</div>
            <div>Music</div>
            <div>React routers</div>
            <div>Bollywood music</div>
            <div>Product</div>
            <div>Jukebox</div>
            <div>Live</div>
            <div>Mixes</div>
            <div>Python</div>
            <div>Gaming</div>
            <div>Children's music</div>
        </div>
        </>
    )
}