const Completed = ({postinput, donedeleteHandler, backtoprogress}) =>{
    return (
      <div key={postinput.id} className="post-style">
      <div>  
      {postinput.title}
      </div>
      <div className='contentsize'>
        {postinput.content}
      </div>
      <div className="workbuttonbox">
      <button className="workbutton" onClick={()=>donedeleteHandler(postinput.id)}>DELETE</button>
      <button className="workbutton" onClick={()=>backtoprogress(postinput.id)}>NOT COMPLETED</button>
      </div>
      </div>
      );
    };
        
    
export default Completed;