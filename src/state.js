let state = {
   content: [
      {
         type: 'panel',
         props: {
            width: 500,
            heigth: 200,
            visible: true
         },
         content: [{
            type: 'label',
            props: {
               caption: 'строка из контента',
               visible: true
            }
         }]
      },
      {
         type: 'label',
         props: {
            caption: 'test',
            visible: true
         }
      },
      {
         type: 'button',
         props: {
            width: 100,
            heigth: 50,
            caption: 'button',
            visible: true
         }
      }

   ]
}



/*export function checkChildren() {
   let outputStr = '';
   content.forEach(item => {
      if (item.type === 'panel') {
         outputStr += '<div className="content-panel"></div>'
      }
      if (item.type === 'label') {
         outputStr += '<span className="content-label"></span>'
      }
      if (item.type === 'button') {
         outputStr += '<button className="content-button"></button>'
      }
   })
   return outputStr
}*/









export default state