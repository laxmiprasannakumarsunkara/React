const Comp9 = (props)=>{
    return(
        <>
        props.flag?(
            <div>
                <h1>{props.str}</h1>
                <h1>{props.num}</h1>
            </div>):
            (<h1>Empty</h1>)
        )
        </>
    )
}
export default Comp9;