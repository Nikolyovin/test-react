import './style.css'
import Panel from './Panel'
import Content from './Content'

const Main = (props) => {
   
   return (
      <div className='main-wrap'>
         <div className='component-wrap'>
            <Panel state={props.state}/>
            <Content  state={props.state} />
         </div>
      </div>
   )
}

export default Main