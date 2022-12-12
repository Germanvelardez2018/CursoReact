import PropTypes from 'prop-types'

const title = "El titulo principal"



export const Title = ({title}) => {
  
  console.log(title)
  
  return (
  <>
    <header><h1>{title} </h1></header>
    <h3> Subtitulo:{title} </h3>
  </>
     
   
  )
}



Title.propTypes ={
  title:PropTypes.string.isRequired
}


Title.defaultProps ={
  title: 'No title'
}