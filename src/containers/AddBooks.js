import React, {useState} from 'react'

const AddBooks = () => {

    const initialState = {
        title : '',
        author: ''
    }
    const [newData, setNewdata] = useState(initialState);
   
    const handleSubmit = e => {
        e.preventDefault()
        console.log(newData)
    }
  return (
    <main role="main">
        <div className='jumbotron jumbotron-fluid mb-4'>
            <div className='container text-center'>
                <h1 className='display-4'>BOOKS</h1>
                <p>Ajouter un livre à votre bibiliothèque</p>
                <form className='form-inline justify-content-center d-flex justify-content-around' onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input 
                            value={newData.title} 
                            type='text' 
                            className="form-control" 
                            placeholder='Titre' 
                            required 
                            // onChange={e => setNewdata(e.target.value)} 
                            onChange={e => setNewdata({...newData, title: e.target.value})} 
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            value={newData.aythor}
                            type='text' 
                            className="form-control ml-3" 
                            placeholder='Auteur' 
                            required 
                            // on peut aussi faire ça onChange={e => setNewdata(e.target.value)} 
                            onChange={e => setNewdata({...newData, author: e.target.value})} 
                        />
                    </div>
                    <div className="form-group">
                        <button className='btn btn-outline-secondary ml-3'>Ajouter un livre</button>
                    </div>
                </form>
            </div>
        </div>
        <div className='container' style={{minHeight : '250px'}}>
            <div className='row'>
                <div className='col-md-12'>
                    <ul className='list-group'>
                        <li className='list-group-item list-group-item-light d-flex justify-content-between'>
                            livres
                        </li>
                    </ul>
                </div>
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-danger mt-4 mb-5'> Effacer les livres</button>
                </div>
            </div>
        </div> 
    </main>
  )
}

export default AddBooks