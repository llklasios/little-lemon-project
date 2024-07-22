import logo from '../images/Logo.svg';

export default function Nav(){
  return (
    <nav>
      <ul>
        <img src={logo}></img>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservations</a></li>
        <li><a href="#">Order Online</a></li>
        <li><a href="#">Login</a></li>
      </ul>
  
    </nav>
  )
}

