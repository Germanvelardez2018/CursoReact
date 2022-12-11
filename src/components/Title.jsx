import { Fragment } from "react"

const title = "El titulo principal"



export const Title = (props) => {
  
  console.log(props.title)
  
  return (
    <Fragment>
       <header><h1>{title} </h1></header>
        <h3> Subtitulo:{props.title} </h3>
    </Fragment>
   
  )
}

