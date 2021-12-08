import './style.css'


const Content = (props) => {

   const checkChildren = (structure = props.state.content) => {
      let outputStr = ''

      structure.forEach(item => {
         if (item.type === 'panel') {
            if (item.content) {
               let childStr = checkChildren(item.content).__html
               outputStr += `<div  style="width:${item.props.width}px; height:${item.props.heigth}px"
            class="content-panel" >${childStr}</div > `
            }
         }
         if (item.type === 'label') {
            outputStr += `<span  style = 'visibility:${item.props.visible ? 'visible' : 'hidden'}'
            class="content-label" > ${item.props.caption}</span > `
         }
         if (item.type === 'button') {
            outputStr += `<button style = "width:${item.props.width}px; height:${item.props.heigth}px;
            visibility:${item.props.visible ? 'visible' : 'hidden'} "
            class="content-button" > ${item.props.caption} </ button> `
         }
      })
      return { __html: outputStr }

   }


   return (
      <div className='content-wrap' dangerouslySetInnerHTML={checkChildren()}>

      </div>
   )
}

export default Content