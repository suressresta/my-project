import '../styles/custom-button.css'
function CustomButton({onPressed, title}){
    return(
        <div id='button'onClick={onPressed}>
    {title}
</div>
    )
}
export  default CustomButton; 