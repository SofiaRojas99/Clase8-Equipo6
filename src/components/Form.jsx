import { useState } from 'react'

const Form = () => {
    const [user, setUser] = useState({
        name: '',
        age: '',
        pokemon: ''
    })

    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)


    const handleSubmit = (event) => {
        event.preventDefault()
        if(user.age > 0){
            setShow(true)
            setErr(false)
        } else setErr(true)

    }

    return ( 
        <>
            <form onSubmit={handleSubmit} style={{display: 'flex',flexDirection: 'column', alignItems:'center', justifyContent:'space-around'}}>
                <label>Name</label>
                <input type="text" onChange={(event) => setUser({...user, name: event.target.value})}/>
                <label>Age</label>
                <input type="number" onChange={(event) => (setUser({...user, age: event.target.value}), setShow(false))}/>
                {err && 'La edad es incorrecta. Ingrese un valor mayor a 0.'}
                <label>Pokemon</label>
                <input type="text" onChange={(event) => setUser({...user, pokemon: event.target.value})}/>
                <button>Registrar</button>
            </form>

            {
                show
                && 
                <>
                    <h4>Se ha registrado con éxito!</h4>
                    <h4>Name: {user.name}</h4>
                    <h4>Age: {user.age}</h4>
                    <h4>Favorite Pokemon: {user.pokemon}</h4>
                </>
            }
            

        </>
    )
}

export default Form