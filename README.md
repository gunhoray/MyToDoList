<img width="1666" alt="Screenshot 2023-06-27 at 10 48 11 AM" src="https://github.com/gunhoray/MyToDoList/assets/88648468/54c6ad44-1ee9-4b1a-bada-c75be4e46619">

# MY TO-DO LIST 

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
     * deleteHandler
     * donedeleteHandler
     * completeHandler
     * backtoprogress
  * Return 

* inprogress.jsx

* completed.jsx

* App.css
  




