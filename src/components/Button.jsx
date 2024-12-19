const Button = () => {

    const hendleClick = (e) => e.trget.textContent = "OUCH!😍";
    return (<button onClick={(e) => hendleClick}>Click me 👿</button>)
}
export default Button
    