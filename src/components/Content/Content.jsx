import { useState } from 'react'

import './Content.css'
import { startInfo } from './data.js'

import Hello from '../Hello/Hello.jsx'
import CreateLi from '../CreateLI/CreateLi.jsx'
import Button from '../Button/Button.jsx'


function Content() {
  const [content, setContent] = useState('0')


  function handleClick(value) {
    setContent(value)
  }

  return (
    <main className='main'>
      <Hello />

      <section>
        <h2>Как начать работу</h2>
        <ol>
          {startInfo.map((item) => (<CreateLi key={item.title} {...item} />))}

          {/* <CreateLi title={startInfo[0].title} description={startInfo[0].description} />
          <CreateLi {...startInfo[1]} />
          <CreateLi {...startInfo[2]} />
          <CreateLi {...startInfo[3]} />
          <CreateLi {...startInfo[4]} /> */}
        </ol>
      </section>

      <section className='button-info'>
        <p className='button-info__text'>
          {content}
        </p>

        <Button click={() => handleClick('1')} isActive={content === '1'}>Кнопка 1</Button>
        <Button click={() => handleClick('2')} isActive={content === '2'}>Кнопка 2</Button>
        <Button click={() => handleClick('3')} isActive={content === '3'}>Кнопка 3</Button>
      </section>

    </main>
  )
}

export default Content
