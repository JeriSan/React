import './App.css';
import { useState } from 'react';
import { sculptureList } from './data.js';

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [showMore,setShowMore] = useState(false);

  const handleClick = () => {
    if(index<(sculptureList.length)-1){
      setIndex(index + 1);
    }else{
      setIndex(0);
      //alert('...');
    }
    //setIndex((oldValue => oldValue + 1));
    //setIndex(index + 1);
    console.log(index);
  }

  const handleMoreClick = () => {
    setShowMore(!showMore);
  }
  //console.log('uno',index);
  
  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>
        Siguiente
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        por {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} de {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Ocultar':'Mostrar'} detalles
      </button>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      {showMore &&<p>{sculpture.description} </p>}
    </>
  );
}

export default Gallery;
//Otra solucion para que no tenga error al momento de dar siguiente
// export default Gallery;

// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   let hasPrev = index > 0;
//   let hasNext = index < sculptureList.length - 1;

//   function handlePrevClick() {
//     if (hasPrev) {
//       setIndex(index - 1);
//     }
//   }

//   function handleNextClick() {
//     if (hasNext) {
//       setIndex(index + 1);
//     }
//   }

//   function handleMoreClick() {
//     setShowMore(!showMore);
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button
//         onClick={handlePrevClick}
//         disabled={!hasPrev}
//       >
//         Anterior
//       </button>
//       <button
//         onClick={handleNextClick}
//         disabled={!hasNext}
//       >
//         Siguiente
//       </button>
//       <h2>
//         <i>{sculpture.name} </i> 
//         por {sculpture.artist}
//       </h2>
//       <h3>  
//         ({index + 1} de {sculptureList.length})
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? 'Ocultar' : 'Mostrar'} detalles
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img 
//         src={sculpture.url} 
//         alt={sculpture.alt}
//       />
//     </>
//   );
// }



/*******VARIABLE REGULAR - al dar click no cambiara la informacion********** */
// import { sculptureList } from './data.js';

// export default function Gallery() {
//   let index = 0;

//   function handleClick() {
//     index = index + 1;
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handleClick}>
//         Siguiente
//       </button>
//       <h2>
//         <i>{sculpture.name} </i> 
//         por {sculpture.artist}
//       </h2>
//       <h3>  
//         ({index + 1} de {sculptureList.length})
//       </h3>
//       <img 
//         src={sculpture.url} 
//         alt={sculpture.alt}
//       />
//       <p>
//         {sculpture.description}
//       </p>
//     </>
//   );
// }
