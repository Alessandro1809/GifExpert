
import {useState} from 'react';

 const AddCategory = ({onNewCategory}) => {

 const [inputValue, setInputValue] = useState('')


const onInputChange=({target})=>{
    setInputValue(target.value)

}
const onSubmit =(e)=>{
    e.preventDefault();

    if (inputValue.trim().length <=1)return;
    
    onNewCategory(inputValue.trim());
    
    setInputValue('');
}
 
  return (
  
        <form action="" onSubmit={onSubmit}>
        <input type="text"
         placeholder='Buscar gifs' 
         value={inputValue} 
         onChange={onInputChange}
         
         />
         <input type="submit" className='submit cardb cardc' value='Buscar'/>
        </form>
    
  )
}
export default AddCategory;
