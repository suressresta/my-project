import '../styles/navbar.css'
import CustomButton from './custom-button'

function Navbar(){
  
    return(
        <div id="navbar">
<div id="logo">LOGO</div>
<div id="menu">
    <p className="menu-item">Home</p>
    <p className="menu-item">Service</p>
    <p className="menu-item">About Us</p>
    <p className="menu-item">Contact</p>
    <p className="menu-item"></p>
    
</div>

<CustomButton title="login"
onPressed={()=>{

    alert("Yamete Kudashai")
}}
/>

        

        </div>

        
    )
}



export default Navbar
