// Profile Component

export default function Profile ({ ...props }){

  const {name, rank, stack} = props

  // display profile


    return (
        <div>
          
          <h1>{name}</h1>
            <h3>{rank}</h3>
          <pre>{stack}</pre>
          
        </div>

    )
}


