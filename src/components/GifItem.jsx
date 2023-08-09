
 const GifItem = ({title,url}) => {
  return (
    <div className='card cardb'>
       <div className='cardc'>
       <img src={url} alt={title} />
        <p>{title}</p>
       </div>
    </div>
  )
}
export default GifItem;
