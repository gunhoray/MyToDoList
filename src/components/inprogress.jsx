const Inprogress = ({postinput, deleteHandler, completeHandler}) =>{
    return (
      <div key={postinput.id} className="post-style">
      <div>  
      {postinput.title}
      </div>
      <div className='contentsize'>
      {postinput.content}
      </div>
      <div className="workbuttonbox">
      <button className="workbutton" onClick={()=>deleteHandler(postinput.id)}>DELETE</button>
      <button className="workbutton" onClick={()=>completeHandler(postinput.id)}>COMPLETED</button>
      </div>
      </div>
      );
    };
    
export default Inprogress;