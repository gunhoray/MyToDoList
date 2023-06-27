<img width="1666" alt="Screenshot 2023-06-27 at 10 48 11 AM" src="https://github.com/gunhoray/MyToDoList/assets/88648468/54c6ad44-1ee9-4b1a-bada-c75be4e46619">

# MY TO-DO LIST 
#### by gunhoray

## assignment of this project
  * 컴포넌트와 리액트 훅 요소를 다룰 수 있어요.
  * 이벤트를 관리할 수 있어요.
  * vercel을 이용해 리액트 사이트를 배포할 수 있어요.

## blueprint of the project

* App.jsx
  * function App
     * states : posts(for inprogress... section) / doneposts(for completed section)
       
     * input states : title(for receiving changes in title input) / content(for receiving changes in content input)
   
     * titleHandler : storing (event.target.value) in title through setTitle taking (event) as parameter
       
     * contentHandler : storing (event.target.value) in content through setContent taking (event) as parameter
   
     * addbtnHandler : click action to add newpost (data from title & content input)
        * verify if user is adding empty data
        * if not, give 'id' by adding 1 to posts length(to verify data) & title & content & isdone as false
        * store newpost to posts by setPosts
        * than, empty setTitle & setContent input
    
     * deleteHandler : click action to delete selected post in "in progress..." section
        * window.confirm to confirm the following action
        * selectedtodeleted : posts.filter to show all post except selected post.id
        * setPosts : set selectedtodeleted in posts
          
     * donedeleteHandler :  click action to delete selected post in "completed" section
        * window.confirm to confirm the following action
        * selectedtodeleted2 : doneposts.filter to show all post except selected post.id
        * setDoneposts : set selectedtodeleted2 in doneposts
          
     * completeHandler : click action to send selected post to "completed" section
        * selectedPost : from posts find selected post.id that matches id parameter
        * updatePosts : filter the selectedPost from posts
        * than selectedPost.isdone is true
        * set the updatePosts in posts by setPosts
        * add selectedPost to doneposts by setDoneposts
          
     * backtoprogress
        * selectedcompleted : from doneposts find selected cancelcomplete.id that matches id parameter
        * updatebackPosts : filter the selectedcompleted from doneposts
        * than selectedcompleted.isdone is false
        * set the updatebackPosts in doneposts by setDoneposts
        * add selectedcompleted to posts by setPosts


  * Return
     * h1 : MY TO-DO LIST
     * inputs : TITLE & CONTENT
     * button : +
     * div : in progress...
        * posts.map <Inprogress />: to produce user's posts
     * div : completed
        * doneposts.map <Completed /> : to produce user's completed posts
      

* inprogress.jsx
  * function Inprogress
     * taking ({postinput, deleteHandler, completeHandler}) as parameter
     * for key={postinput.id}, {postinput.title}, {postinput.content}, button DELETE & COMPLETED

* completed.jsx
  * function Completed
     * taking ({postinput, donedeleteHandler, backtoprogress}) as parameter
     * for key={postinput.id}, {postinput.title}, {postinput.content}, button DELETE & NOT COMPLETED

* App.css
  




