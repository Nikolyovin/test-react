import react from 'react'
import './style.css'

const Panel = (props) => {

   let pathInput = react.createRef()
   let newValue = react.createRef()

   const setValue = () => {
      pathInput = pathInput.current.value
      newValue = newValue.current.value
      /*props.state.content.map(obj=>({...obj[2], pathInput : newValue}))*/
      for (let key in props.state) {
         if (key === pathInput) {
            key = newValue
         }
      }

   }


   return (
      <div className='panel-wrap'>
         <div className='panel-input-wrap'>
            <span>Путь</span>
            <input className='panel-input panel-input-path' type='text' ref={pathInput} />
         </div>
         <div className='panel-input-wrap'>
            <span>Новое значение</span>
            <input className='panel-input panel-input-newValue' type='text' ref={newValue} />
         </div>
         <button onClick={setValue} className='panel-button'>Применить</button>
      </div>
   )
}

export default Panel

/*Object.assign(props[pathInput.current.value],newValue.current.value)*/

/*const setValue=(props.content.map(obj=>{
   if (obj==pathInput.current.value){
      return{...obj,[pathInput.current.value]:newValue.current.value}
   }else{
      return obj
   }
}))*/

/*pathInput.current.value = newValue.current.value*/