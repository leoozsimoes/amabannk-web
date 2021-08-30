function Burger({ abrir, setAbrir }) {
    return (
        <div 
            abrir={abrir.toString()} 
            onClick={() => setAbrir(!abrir)} 
            className={abrir ? 'menu-burger': 'menu-burger is-expanded'}>
                <div></div>
                <div></div>
                <div></div>
        </div>
    )
}
export default Burger 