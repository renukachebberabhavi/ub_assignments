import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
    return (
        <div class="sidebar">
        <div class="sidebar_container">
            <div class="sidebar-element">
                    <div class="sidebar_element-icon">
                       <i class="fa fa-home"></i>
                    </div>
                     <div class="sidebar-element-content">
                     {/* <div>Home</div> */}Home
                     </div>
                    
                     {/* <div class="sidebar_element-icon">
                       <i class="fa fa-youtube-play"></i>
                    </div>
                     <div class="sidebar-element-content">
                     <div>Subscriptions</div>
                     </div> */}
            </div>
            <div class="sidebar-element">
                    <div class="sidebar_element-icon">
                       <i class="fa fa-youtube-play"></i>
                    </div>
                     <div class="sidebar-element-content">
                       Subscriptions
                     </div>
                   
            </div>
            <div class="sidebar-element">
                    <div class="sidebar_element-icon">
                       <i class="fa fa-folder-open"></i>
                    </div>
                     <div class="sidebar-element-content">
                       Library
                     </div>
                   
            </div>
            <div class="sidebar-element">
                    <div class="sidebar_element-icon">
                       <i class="fa fa-clock-o"></i>
                    </div>
                     <div class="sidebar-element-content">
                       Watch Later
                     </div>
                   
            </div>
            <div class="sidebar-element">
                    <div class="sidebar_element-icon">
                       <i class="fa fa-thumbs-o-up"></i>
                    </div>
                     <div class="sidebar-element-content">
                       Liked Videos
                     </div>
                   
            </div>
            <div class="sidebar-element">
                    <div class="sidebar_element-icon">
                       <i class="fa fa-music"></i>
                    </div>
                     <div class="sidebar-element-content">
                       Music
                     </div>
                   
            </div>
            <div class="sidebar-element">
                    <div class="sidebar_element-icon">
                       <i class="fa fa-film"></i>
                    </div>
                     <div class="sidebar-element-content">
                       Movies
                     </div>
                   
            </div>
            <div class="sidebar-element">
                    <div class="sidebar_element-icon">
                       <i class="fa fa-fire"></i>
                    </div>
                     <div class="sidebar-element-content">
                       Trending
                     </div>
                   
            </div>
            <div class="sidebar-element">
                    <div class="sidebar_element-icon">
                       <i class="fa fa-gear"></i>
                    </div>
                     <div class="sidebar-element-content">
                       Settings
                     </div>
                   
            </div>
            <div class="sidebar-element">
                    <div class="sidebar_element-icon">
                       <i class="fa fa-question-circle"></i>
                    </div>
                     <div class="sidebar-element-content">
                       Help
                     </div>
                   
            </div>
        </div>
        </div>
                        
        
    )
}

// export default function Sidebar() {
//     return (
//         <div class="sidebar">
//             <div class="sidebar_section1">
            
//                 {/* <div class="deliver">
//                     <div class="icon">
//                         <i class="fa fa-map-marker"></i>
//                     </div>
//                     <div class="deliver-content">
//                         <div>Deliver to</div>
//                         <div>India</div>
//                     </div>
//                 </div> */}
//             /div>
//             <div class="section2"<>
//                 <div class="searchbox">
//                     <input type="text" />
//                 </div>
//                 <div class="searchicon">
//                     <i class="fa fa-search"></i>
//                 </div>
//                 <div class="searchmicophone">
//                     <i class="fa fa-microphone"></i>
//                 </div>

//             </div>
//             <div class="section3">
//                 <div class="signin">
//                     <button>SignIn</button>
//                 </div>
//                 {/* <div class="orders">
//                     <span>Returns</span>
//                     <span>& Orders</span>
//                 </div> */}
                
//                 <div class="createicon">
//                     <i class="fa fa-plus"></i>
//                 </div>
//                 <div class="headerbellicon">
//                     <i class="fa fa-bell"></i>
//                 </div>
//             </div>
//         </div>
//     )
// }