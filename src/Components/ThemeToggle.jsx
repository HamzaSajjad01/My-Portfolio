import React,{useState,useEffect} from 'react'
import { MdLightMode,MdDarkMode } from 'react-icons/md';

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark" );
    useEffect(() => {
    if(darkMode){
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme" , "dark")
    }
    else{
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme",'light')
    }
    
    
    }, [darkMode])
    
  return (
    <button className='p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-full bg-transparent'
        onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <MdLightMode size={25} color='yellow'/> : <MdDarkMode size={25} color='yellow'/>}
    </button>
  )
}

export default ThemeToggle