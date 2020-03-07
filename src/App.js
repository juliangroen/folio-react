import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Menu from './Menu';

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  }
  return <div className="relative z-10 text-gray-400">
    <Header toggleMenu={handleShowMenu} />
    <Menu showMenu={showMenu} />
    <div class="px-6 pb-8 mt-4" id="content">
      <p class="font-mono text-3xl text-center">
        Hello my name is
        <br />
        <span class="text-4xl font-extrabold tracking-wider text-teal-300">
          Julian Groen
        </span>
        <br />
        <span class="text-xl">
          and I love to code &#128104;&#127995;&#8205;&#128187;
        </span>
      </p>
      <div class="text-center bio">
        <p class="mt-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo nostrum
          accusantium laboriosam impedit nihil autem doloribus sed? Hic voluptas
          earum beatae. Exercitationem veritatis unde accusantium molestiae
          odit, fuga voluptates. Nesciunt, cupiditate? Explicabo.
        </p>
        <p class="mt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
          harum neque ea molestias aliquam libero corporis illum necessitatibus
          excepturi tempore! Incidunt, magni necessitatibus. Nostrum hic
          distinctio quod ratione, architecto aut doloribus voluptatum.
        </p>
        <p class="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          temporibus eveniet harum! Error maxime impedit nostrum provident,
          necessitatibus minus porro. Dolor voluptatibus molestiae ullam,
          facilis quos aut voluptatem vitae qui! Dignissimos quis aliquid animi
          consequatur, laboriosam quo quos tempora voluptas porro temporibus?
        </p>
      </div>
    </div>
  </div>
}

export default App;
