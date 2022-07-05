const NavBar = ({name}) => {
    const displayName = name.toUpperCase ();
    return (
    <nav>
        <p>{displayName}</p>
        <p>Home</p>
        <p>Tienda</p>
        <p>Contacto</p>
    </nav>
    );
}
 
export default NavBar;

