import styles from "./Container.module.css";

function Container(props){
    return(
        <div>
            {props.children}
            <p>OI</p>
        </div>
    )
}

export default Container