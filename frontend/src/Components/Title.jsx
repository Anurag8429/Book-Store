// import React from 'react'


// const Title = ({title1,title2,titleStyles,title1Styles,parasStyles}) => {
//   return (
//     <div className={`${titleStyles} pb-1`}>
//       <h2 className={`${title1Styles} h2`}>{title1}
//         <span className='text-secondary !font-light'>{title2}</span>
//       </h2>
//       <p className={`${parasStyles} mb-6 `}>From timeless classics to modern masterpieces,
//         find the <br/>
//         perfect read for every moment</p>
//     </div>
//   )
// }

// export default Title

// import React from 'react'

// const Title = ({ title1, title2, titleStyles, title1Styles, parasStyles, showPara = true }) => {
//   return (
//     <div className={`${titleStyles} pb-1`}>
//       <h2 className={`${title1Styles} h2`}>
//         {title1}
//         <span className='text-secondary !font-light'>{title2}</span>
//       </h2>
//       {showPara && (
//         <p className={`${parasStyles} mb-6`}>
//           From timeless classics to modern masterpieces, find the <br />
//           perfect read for every moment
//         </p>
//       )}
//     </div>
//   )
// }

// export default Title


import React from 'react'

const Title = ({ title1, title2, titleStyles, title1Styles, parasStyles, paraText, showPara = true }) => {
  return (
    <div className={`${titleStyles} pb-1`}>
      <h2 className={`${title1Styles} h2`}>
        {title1}
        <span className='text-secondary !font-light'>{title2}</span>
      </h2>
      {showPara && (
        <p className={`${parasStyles} mb-6`}>
          {paraText}
        </p>
      )}
    </div>
  )
}

export default Title