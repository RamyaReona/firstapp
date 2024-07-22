
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';

const Apilist = () => {
    const message = () => toast("added successfully")

    const[data, setData] = useState([]);
    const[newtitle, setnewtitle]=useState('');
    const[newemail, setnewemails]=useState('');
    const[currentitem, setcurrentitem] = useState(null);
    const[isModalOpen, setisModalOpen] = useState(false);
    useEffect(() =>{
        let url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url).then(response => response.json())
        .then(response => setData(response));
        console.log(data);
    }, [])
    const addnewitem = (e) =>{
e.preventDefault();
        const username = newtitle.trim();
        const email = newemail.trim();

        if(username && email){
         fetch('https://jsonplaceholder.typicode.com/users',
           { method: 'POST',
            body:  JSON.stringify({username: username, email: email}),
            headers:{
                'Content-Type' : 'application/json'
            }
           }
         ).then(response =>response.json())
         .then(res => {setData([...data, res]);
         toast.success("added successfully")})

        }
        setnewemails('');
        setnewtitle('');
}
const openeditmodal= (item) => {
    setisModalOpen(true)
    setnewtitle(item.username);
    setcurrentitem(item);
    setnewemails(item.email);
    console.log("item checked..", item);
}
const closeModal = () => {
    setisModalOpen(false)    
}
const updateItem = (e) => {
    e.preventDefault();
    const username = newtitle.trim();
    const email = newemail.trim();

    if(username && email){
    fetch(`https://jsonplaceholder.typicode.com/users/${currentitem.id}`,
       { method: "PUT",
        body: JSON.stringify({id: currentitem.id, username,email}),
        headers: {
            'Content-Type' : 'application/json'
        }
       }
    ).then(res => res.json())
    .then(res => {
        console.log("res", res);
        const updateddata = data.map((item,ind) => (item.id === res.id ? res : item));
        setData(updateddata);
        toast.success("Updated successfully");
        closeModal()
    })
    }
}
    return(
        <div>
            <ToastContainer />
            {!isModalOpen &&
            <form>
                <input type="text" value={newtitle} onChange={(e) => setnewtitle(e.target.value)} />
                <input type="text" value={newemail} onChange={(e) => setnewemails(e.target.value)} />
                <button onClick={addnewitem}>Submit</button>
            </form> }
            <table>
                <thead><tr>
                    <td>S.No</td>
                    <td>Username</td>
                    <td>email</td>
                    <td>Actions</td></tr>
                </thead>
                <tbody>
                    {data.map((item,ind)=>
                        <tr key={ind}>
                <td>{ind + 1}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                  <td><button onClick={() => openeditmodal(item)}>Edit</button><button>Delete</button></td>  
                </tr>
            )}
                </tbody>
         </table>
         <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Edit User">
                <h2>Edit User</h2>
                <form onSubmit={updateItem}>
                    <input type="text" value={newtitle} onChange={(e) => setnewtitle(e.target.value)} placeholder="Username" />
                    <input type="text" value={newemail} onChange={(e) => setnewemails(e.target.value)} placeholder="Email" />
                    <button type="submit">Update</button>
                    <button type="button" onClick={closeModal}>Cancel</button>
                </form>
            </Modal>
        </div>
    )
}


export default Apilist;