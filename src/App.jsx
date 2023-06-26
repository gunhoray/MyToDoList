import React, {useState} from 'react';
import Inprogress from './components/inprogress';
import Completed from './components/completed';
import './App.css';

function App() {

  const [posts, setPosts] =useState([
  ]);

  const [doneposts, setDoneposts] =useState([
  ]);

  const [title,setTitle]=useState('');
  const [content,setContent]=useState('');
  
  const titleHandler=(event)=>{setTitle(event.target.value)};
  const contentHandler=(event)=>{setContent(event.target.value)};

  const addbtnHandler = () => {
    if (title===""&&content===""){
      alert("emptiness is not a goal")
    }
    if (title!==""||content!==""){
  const newpost = {
    id: posts.length + 1,
    title: title,
    content: content,
    isdone: false,
  };
  setPosts([...posts,newpost]);
  setTitle('');
  setContent('');
  };}

  const deleteHandler = (id) =>{
    if(window.confirm("you really want to delete this?")){
    const selectedtodeleted = posts.filter(function(post){return post.id !== id;})
    setPosts(selectedtodeleted);} 
  }

  const donedeleteHandler = (id) =>{
    if(window.confirm("you really want to delete this?")){
    const selectedtodeleted2 = doneposts.filter(function(post){return post.id !== id;})
    setDoneposts(selectedtodeleted2);} 
  }

  const completeHandler = (id) =>{
    const selectedPost = posts.find((post)=>post.id===id);
    if (selectedPost){
      const updatePosts = posts.filter((post)=>post.id!==id);
      selectedPost.isdone =true;
      setPosts(updatePosts);
      setDoneposts([...doneposts, selectedPost]);
    }
  };

  const backtoprogress = (id) =>{
    const selectedcompleted = doneposts.find((cancelcomplete)=>cancelcomplete.id===id);
    if (selectedcompleted){
      const updatebackPosts = doneposts.filter((cancelcomplete)=>cancelcomplete.id!==id);
      selectedcompleted.isdone=false;
      setDoneposts(updatebackPosts);
      setPosts([...posts,selectedcompleted]);
    }
  }
  
  return (
    <div className="centered-container">
    <div className='wholebox'>
      <div className='titleofpage'>
        <h1 className='title'>MY TO-DO LIST<span className='subtitle'>react</span></h1>
        </div>
          <div className='inputsection'>
            TITLE  <input type='text' value={title} onChange={titleHandler}/>
            CONTENT  <input type='text' value={content} onChange={contentHandler}/>
            <button className="addbutton"onClick={addbtnHandler}>+</button>
          </div>
              <div className='inprogressbox'>
                in progress...
              </div>
              <div className="postbox-style">
                      {posts.map(function(postinput){
                        return <Inprogress key={postinput.id} postinput={postinput} deleteHandler={deleteHandler} completeHandler={completeHandler} />
                      })}    
              </div>            
              <div className='completedbox'>
                completed
              </div>
              <div className="postbox-style">
                      {doneposts.map(function(postinput){
                        return <Completed key={postinput.id} postinput={postinput} donedeleteHandler={donedeleteHandler} backtoprogress={backtoprogress} />
                      })}   
              </div>          
    </div>
    </div>
  );
};
export default App;
