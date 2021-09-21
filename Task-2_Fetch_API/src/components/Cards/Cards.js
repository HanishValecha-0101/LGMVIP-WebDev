import './Cards.css'

const Cards = ({loading,users}) => {
    return  (

    (!loading) && users.map(user =>
                      <div className="row">
                          <div className="col-md-4">                       {
                          console.log(user)
                        }
                        <div className="card" style={{width:"18rem"}}>
                          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                          
                          <h1 className="name">{user.first_name} {user.last_name}</h1>
                          <h6>Unique ID={user.id}</h6>
                          <p className="email">Email ID: <a href="/">{user.email} </a></p> 
                          <button className="btn btn-primary">Contact</button>
                        </div>
                        </div>
                      </div>
            )
          

        )
}

export default Cards;