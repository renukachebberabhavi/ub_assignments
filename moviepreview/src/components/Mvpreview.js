import './Mvpreview.css'

function MvPreview(props) {
      let card_id = document.querySelector(".card");
    // // // // let card_id = document.querySelector(".Previewcontainer");
    card_id.addEventListener("mouseout", (e) => {
        card_id.style.border = "none"
     })
     card_id.addEventListener("mouseover", (e) => {
         card_id.style.border = "2px solid black"
        //  console.log("Still building this page")
     })

    return (
        <>
            <div class="card">
                <div class="image-card">
                    <img src={props.thumbnail} alt="" srcset="" height={200} width={200} />
                </div>
                <div class="card-content">{props.title} <br></br>{props.rating}</div>
            </div>

            {/* <div class="card">
    <div class="image-card">
    <img src = {' https://images.unsplash.com/photo-1669283723966-3437546829cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80 '} height={200} width={200}/>
    </div>
    </div> */}

        </>
    )

}

export default MvPreview;
