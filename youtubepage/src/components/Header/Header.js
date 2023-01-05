import React from 'react'
import "./header.css"

export default function Header() {
    return (
        <div class="header">
            <div class="section1">
            <div class="headerbaricon">
                <i class="fa fa-bars"></i>
                </div>
                <div class="logo">
                    <img src="/images/youtube_logo.png" alt="youtube_logo" />
                </div>
                {/* <div class="deliver">
                    <div class="icon">
                        <i class="fa fa-map-marker"></i>
                    </div>
                    <div class="deliver-content">
                        <div>Deliver to</div>
                        <div>India</div>
                    </div>
                </div> */}
            </div>
            <div class="section2">
                <div class="searchbox">
                    <input type="text" />
                </div>
                <div class="searchicon">
                    <i class="fa fa-search"></i>
                </div>
                <div class="searchmicophone">
                    <i class="fa fa-microphone"></i>
                </div>

            </div>
            <div class="section3">
                <div class="signin">
                    <button>SignIn</button>
                </div>
                <div class="header-right-most">                
                <div class="createicon">
                    <i class="fa fa-plus"></i>
                </div>
                <div class="headerbellicon">
                    <i class="fa fa-bell"></i>
                </div>
                </div> 
            </div>
        </div>
    )
}