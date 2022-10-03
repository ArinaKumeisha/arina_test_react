import React from 'react';
import style from './app.module.css';
import fox from './image/1-13.jpg';
import feature from './image/518a.jpg';
import wolf from './image/volk.png';

type Props = {
  id: number
  description: string
  img: string
}

function App() {
  let [active, setActive] = React.useState(0)
  const [state, setState] = React.useState<Props[]>([{
    id: 1,
    description: 'лиса хитрая и очень умная, но будь с ней осторожнее, может и укусить.',
    img: fox
  },
    {
      id: 2,
      description: 'смешная картинка, посмотри и посмейся, тебе дожно понравится!',
      img: feature
    },
    {id: 3, description: 'волк воет на луну, и он очень злой и опасный!', img: wolf},
  ])

  const handler = (inputId: number) => {
    setActive(inputId)
  }

  const showPrevImage = (id: number) => {
    let current = 0;
    if(id){
      current = id-1;
    }else {
      current = state.length - 1
    }
      setActive(current)

  }


  const showNextImage = () => {
    setActive(active + 1)
  }
  return (
    <div className={style.container}>
      <div className={style.block}>
        <div className={style.textBlock}>
          {state.map(el => (
              <div onClick={() => handler(el.id)}
                   className={active === el.id ? `${style.active} ${style.text}` : style.text}>{el.description}</div>
            )
          )}
        </div>
        <div className={style.imagesBlock}>
          {state.map(el => (
            active === el.id ?
              <>
                <h3>{el.id} / {state.length}</h3>
                <div className={style.image}>
                  <img src={el.img} alt='' className={style.img}/>
                  <div
                    className={`${style.arrow} ${style.arrowLeft}`}
                    onClick={()=>showPrevImage(el.id)}>
                  </div>
                  <div
                    className={`${style.arrow} ${style.arrowRight}`}
                    onClick={() => showNextImage()}>
                  </div>
                </div>
              </> : ''
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
