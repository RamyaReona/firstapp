
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';

const Apilist = () => {
    const message = () => toast("added successfully")

    const[data, setData] = useState([]);
    const[newname, setusername]=useState('');
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

const username = newname.trim();
const email = newemail.trim();
if(username && email){
fetch('https://jsonplaceholder.typicode.com/users', 
    {method: "POST",
        body: JSON.stringify({username,email}),
        headers:{
            'Content-Type' :'application/json'
        }
    }
).then(response => response.json())
.then(response =>{
    console.log(response, data);
    setData([...data, response]);
    toast.success("usernam and mail id added suceessfully..");
})
setnewemails('');
setusername('');
}
}
const openeditmodal= (item) => {
    setisModalOpen(true);

}

const closeModal = () => {
    setisModalOpen(false)    
}

const editItem = (item) => {
    setisModalOpen(true);
console.log("item..", item);
setnewemails(item.email);
setusername(item.username);
setcurrentitem(item);
}
const updateItem = (e) => {
    e.preventDefault();
//console.log(e, e.target.value.id)
const username = newname.trim();
const email = newemail.trim();
console.log("username and email",  username, email);
if(username && email){
fetch(`https://jsonplaceholder.typicode.com/users/${currentitem.id}`,
    {method: "PUT",
    body: JSON.stringify({id:currentitem.id,username,email}),
    headers: {
        'Content-type' : 'application/json'
    }
    }
).then(res => res.json())
.then(res => {
    const updateddata = data.map(item => (item.id=== res.id ? res : item));
    setData(updateddata);
    console.log(updateddata);
});
setusername('');
setnewemails('');
setcurrentitem(null);
setisModalOpen(false)
}
}
const deleteItem = (id) => {

    console.log(id);
fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
    {
        method: "DELETE"
    }).then(res => 
    {
        const deleteItem = data.filter((item,ind) => item.id !== id);
        setData(deleteItem); 
    }
    )
}
    return(
        <div>
            <ToastContainer />
            <Modal isOpen={isModalOpen}
                            onRequestClose={closeModal}
                            contentLabel="Edit User">
            <form>
                <input type="text" value={newname} onChange={(e) => setusername(e.target.value)} />
                <input type="text" value={newemail} onChange={(e) => setnewemails(e.target.value)} />
                <button onClick={updateItem}>Submit</button>
                <button onClick={closeModal}>Cancel</button>
            </form>
            </Modal>
            {!isModalOpen  && <form>
                <input type="text" value={newname} onChange={(e) => setusername(e.target.value)} />
                <input type="text" value={newemail} onChange={(e) => setnewemails(e.target.value)} />
                <button onClick={addnewitem}>Submit</button>
            </form>}
            <table>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
            {data.map((item,ind) =>  <tr>
                <td>{ind + 1}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td><button onClick={() => editItem(item)}>Edit</button><button onClick={() => deleteItem(item.id)}>Delete</button></td>
            </tr>)}
            </tbody>
            </table>
        </div>
    )
}


export default Apilist;