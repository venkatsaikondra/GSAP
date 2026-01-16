import "@/app/stickyCards/stickyCards.module.css"
const stickyCards=()=>{
    const stickyCardsData=[
         {
        index:"01",
        title:"Modularity",
        image:'./1.jpg',
        description:"Every element is built to snap into place.We design modular systems where clarity,structure and reuse come first-no-clutter ,no excess. "
    },
     {
        index:"01",
        title:"Modularity",
        image:'./2.jpg',
        description:"Every element is built to snap into place.We design modular systems where clarity,structure and reuse come first-no-clutter ,no excess."
    },
     {
        index:"01",
        title:"Modularity",
        image:'./3.jpg',
        description:"Every element is built to snap into place.We design modular systems where clarity,structure and reuse come first-no-clutter ,no excess."
    },
     {
        index:"01",
        title:"Modularity",
        image:'./4.jpg',
        description:"Every element is built to snap into place.We design modular systems where clarity,structure and reuse come first-no-clutter ,no excess."
    },
    ]
   
    return(
        <div className="sticky-cards">
            {stickyCardsData.map((cardData,index)=>(
                <div className="sticky-card" key={index}>
                    <div className="sticky-card-index">
                        <h1>{cardData.index}</h1>
                    </div>
                    <div className="sticky-card-content">
                        <div className="sticky-card-content-wrapper">
                            <h1 className="sticky-card-header">
                                {cardData.title}
                            </h1>
                            <div className="sticky-card-img">
                                <img src={cardData.image} alt="" />
                            </div>
                            <div className="sticky-card-copy">
                                <div className="sticky-card-copy-title">
                                    <p>About the state</p>
                                </div>
                                <div className="sticky-card-copy-description">
                                    <p>{cardData.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default stickyCards;