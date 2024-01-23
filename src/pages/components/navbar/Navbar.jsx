import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='nv'>
        <Link to='/' style={{textDecoration:"none", color:"inherit"}}><h1>SHOWSPLEX</h1></Link>
    </div>
  )
}

export default Navbar