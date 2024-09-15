import { Navbar } from "./_components/Navbar"

const Dashboardlayout = ({
    children
}:{
    children: React.ReactNode
}) =>{
    return(
        <div>
            <Navbar />
            {children}
        </div>
    )
}
export default Dashboardlayout