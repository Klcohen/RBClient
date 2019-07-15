import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor() { 

    let observable = Observable.create((observer:any) => {
      try {
        observer.next('Hey guys')
        observer.next('How are you?')
        observer.complete()
      observer.next("This will not send")
    } catch(err) {
      observer.error(err)
    }
  });
  
  observable.subscribe(
    (x:any) => addItem(x),
    (error:any) => addItem(error),
    () => addItem('Completed')
    );
    
    function addItem(val:any) {
      let node = document.createElement("li");
      let textnode = document.createTextNode(val);
      node.appendChild(textnode);
      document.getElementById("output").appendChild(node);
    }
    function hideWarning() {
      document.getElementById('no_go').style.display = 'none';
    }
    
    function showWarning () {
      document.getElementById('no_go').style.display = 'block';
      document.getElementById('no_go').innerHTML = '<strong>Warning:</strong> App will not work if local storage is disabled or unsupported.';
      console.warn('App will not work if local storage is disabled or unsupported.');
    } 
    
    function supportsLocalStorage () {
      return typeof localStorage !== 'undefined';
    }
    
    function getComments() {
      return JSON.parse(localStorage.getItem('comments')) || [];
    }
    
    function saveComment (comments, commentStr, action) {
      if (!commentStr && comments.indexOf(commentStr) < 0) {
        action();
      }
      
      action(undefined, commentStr);
      
    }
    
    function appendToStream(stream, str, index) {
      var li = document.createElement('LI');
      li.setAttribute('data-index', index);
      li.innerHTML = str;
      stream.appendChild(li);
    }
    
    function loadComments(stream) {
      var comments = getComments();
      if (comments) {
        for (var i = 0; i < comments.length; i++) {
          appendToStream(stream, comments[i], i);
        }    
      }
    }
    
    function clearComments(stream) {
      localStorage.removeItem('comments');
      stream.innerHTML = '';
    }
    
    if (supportsLocalStorage()) {
      initApp();
    } else {
      showWarning();
    }
    
    function initApp() {
      hideWarning();
      
      var commentForm = document.getElementById('comment-form'),
          commentList = document.getElementById('comment-stream'),
          commentInput = document.getElementById('comment-input'),
          removeAll = document.getElementById('remove-all');
     
      loadComments(commentList);
      
      removeAll.addEventListener('click', function() {
        clearComments(commentList);
      }, true);
      
      commentForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var commStr = commentInput,
            comments = getComments();
        
        saveComment(comments, commStr, function(err, value) {
          
          if (err) {
            return;
          }
          
          comments.push(value);
          localStorage.setItem('comments', JSON.stringify(comments));  
          // appendToStream(commentList, commStr);
          // commentInput.value = '';      
        });
        
      }, true);
    }
  }

  ngOnInit() {
  }

  }
    