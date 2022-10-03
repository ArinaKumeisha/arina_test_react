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
    {
      id: 3,
      description: 'смешная картинка, посмотри и посмейся, тебе дожно понравится!',
      img: feature
    },
    {id: 4, description: 'волк воет на луну, и он очень злой и опасный!', img: wolf},
  ])

  const handler = (inputId: number) => {
    setActive(inputId)
  }

  const showPrevImage = (id: number) => {
    setActive((current) => {
        let newValue;
        if (current > 1) {
          newValue = current - 1;
        } else {
          newValue = state.length;
        }
        return newValue;
      }
    )
  }


  const showNextImage = () => {
    setActive((current) => {
      return current === state.length ? 1 : current + 1;

    })
  }
  return (
    <div className={style.container}>
      <div className={style.block}>
        {state.map(el => (
            <div key={el.id}>
              <div className={style.textBlock}>
                <div onClick={() => handler(el.id)}
                     className={active === el.id ? `${style.active} ${style.text}` : style.text}>{el.description}
                </div>
              </div>

              {active === el.id &&
                <div className={style.imagesBlock}>
                  <h3>{el.id} / {state.length}</h3>
                  <div className={style.image}>
                    <img src={el.img} alt='' className={style.img}/>
                    <div
                      className={`${style.arrow} ${style.arrowLeft}`}
                      onClick={() => showPrevImage(el.id)}>
                    </div>
                    <div
                      className={`${style.arrow} ${style.arrowRight}`}
                      onClick={showNextImage}>
                    </div>
                  </div>
                </div>}
            </div>
          )
        )} </div>

    </div>
  );
}

export default App;
