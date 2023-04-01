import { Fragment } from 'react';
import classes from './Modal.module.css';
import ReactDOM  from 'react-dom';

const Backdrop=props=>{
    return <div className={classes.backdrop}></div>
}

 const ModalOverlays=props=>{
    return <div  className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
        </div>
 }


  const portalelement= document.getElementById('overlays')
 const Modal =(props)=>{
    return <Fragment>
      {ReactDOM.createPortal(<Backdrop/>,portalelement)}
     {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>,portalelement)}
    </Fragment>
 }

 export default Modal