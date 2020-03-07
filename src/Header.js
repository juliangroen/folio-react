import React, {useState} from 'react'

const Header = ({ toggleMenu }) => {
  const [toggleIcon, setToggleIcon] = useState(true);
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  }
  return (
    <header className="relative z-30 grid bg-gray-900">
      <button className="w-12 m-2 text-indigo-400 fill-current hover:text-teal-300" id="headerLogo">
        <svg className="" viewBox="0 0 24 24" fill="currentColor"
          stroke="none">
          <path
            d="M16.0547 8.33203C17.7266 9.66797 19.0195 11.1016 19.9336 12.6328C18.1523 16.2656 15.418 18.9336 11.7305 20.6367C6.49609 18.5273 3.87891 15.3359 3.87891 11.0625C3.87891 10.75 3.89453 10.4336 3.92578 10.1133C6.36328 6.58203 9.06641 4.21484 12.0352 3.01172C13.6602 4.14453 15.8828 5.07422 18.7031 5.80078L16.0547 8.33203ZM11.8008 6.36328C11.7305 7.15234 11.6953 7.85156 11.6953 8.46094C11.6953 9.07031 11.7031 9.58203 11.7188 9.99609C12.1484 9.59766 12.5898 9.19922 13.043 8.80078C13.4961 8.40234 13.9375 7.99609 14.3672 7.58203C13.6953 7.05859 12.8398 6.65234 11.8008 6.36328ZM11.7422 10.5703C11.7812 11.5156 11.8555 12.457 11.9648 13.3945C11.1523 13.543 10.1953 14.0781 9.09375 15C9.73438 15.5859 10.4648 16.1211 11.2852 16.6055C12.1133 17.0898 12.8867 17.332 13.6055 17.332C13.8086 17.332 14.0117 17.3164 14.2148 17.2852C15.5039 17.0742 16.2266 16.5 16.3828 15.5625C16.4219 15.3125 16.4414 15.0703 16.4414 14.8359C16.4414 14.1797 16.2891 13.5977 15.9844 13.0898C15.6797 12.5742 15.1797 12.0742 14.4844 11.5898C13.7891 11.0977 12.875 10.7578 11.7422 10.5703ZM8.22656 14.1445C8.42969 13.6992 8.54688 13.1875 8.57812 12.6094L8.68359 8.53125C8.69141 8.17969 8.57422 7.72656 8.33203 7.17188C8.20703 7.28125 8.09375 7.41016 7.99219 7.55859C7.28125 8.51172 6.92578 9.58203 6.92578 10.7695C6.92578 12.0586 7.35938 13.1836 8.22656 14.1445Z" />
        </svg>
      </button>
      <button 
        className="absolute top-0 right-0 w-10 m-3 text-gray-600 stroke-current hover:text-gray-400" id="headerMenuToggle"
        onClick={()=> {handleToggleIcon();toggleMenu()}}
      >
        {(toggleIcon
          ?
            <svg id="headerIconMenu" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          :
            <svg id="headerIconClose" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        )}
      </button>
    </header>
  )
}

export default Header