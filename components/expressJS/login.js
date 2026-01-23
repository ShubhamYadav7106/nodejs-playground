export  const login=()=>{
    return(

        `
        <form action='/submit' method='post'>
        <input type='text' placeholder='enter name'/>
        <input type='password' placeholder='enter password'/>
        <button>submit</button>
        </form>
`
    )
}