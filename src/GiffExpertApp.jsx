import {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
const GiffExpertApp = () => {

    const [categories, setCategories] = useState(['One piece']);

    const onAddCategory=(newCategory)=>{
        if (categories.includes(newCategory)) return;
        setCategories([newCategory,...categories]);
        
    }

  return (
  <>
  
    <h3>Gif Expert</h3>

    <AddCategory 
    onNewCategory={e=>onAddCategory(e)}
    />

        {categories.map(category=>
            (
                <GifGrid key={category} 
                category={category}
                
                />
            )
        )}
  </>
  )
}
export default GiffExpertApp;
