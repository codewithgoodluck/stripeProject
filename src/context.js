import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()
export const AppProvider = ({children})=>{
const [isSidebarOpen, setIsSidebaropen] = useState(false)
const [isSubmenuOpen, setisSubmenueOpen] = useState(true)
const [location,setLocation] = useState({})
const [page, setPage] = useState({page:"", links:[]})

console.log(page)


const openSidebar = ()=>{
    setIsSidebaropen(true)
}
const closeSidebar = ()=>{
    setIsSidebaropen(false)
}

const openSubmenue = (text, coordinates)=>{
    const page =sublinks.find((link)=> link.page === text)
    setPage(page)
    setLocation( coordinates)
    setisSubmenueOpen(true)
}

const closeSubmenue = ()=>{
    setisSubmenueOpen(true)
}

return (
    <AppContext.Provider value={{isSidebarOpen,isSubmenuOpen, openSidebar, closeSidebar,  openSubmenue , closeSubmenue ,location }}>
        {children}
    </AppContext.Provider>
)
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}



