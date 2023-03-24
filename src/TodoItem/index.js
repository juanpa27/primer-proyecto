import React from "react";
import './TodoItem.css';
import UseAnimations from 'react-useanimations';
// EVERY ANIMATION NEEDS TO BE IMPORTED FIRST -> YOUR BUNDLE WILL INCLUDE ONLY WHAT IT NEEDS
import trash2 from 'react-useanimations/lib/trash2'



function TodoItem(props){


    return(
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
                >
            √
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                 {props.text}
                 
            </p>
            <span>
                <UseAnimations 
                    className="Icon Icon-delete" 
                    animation={trash2} 
                    size={36} 
                    wrapperStyle={{ padding: 25 }}
                    onClick={props.onDelete}
                    
                    
                />
            </span>
      </li>
    );
}

export {TodoItem};