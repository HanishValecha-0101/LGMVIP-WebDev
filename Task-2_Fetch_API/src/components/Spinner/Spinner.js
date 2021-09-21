import loader from './Spinner-1s-200px.gif'
import './Spinner.css'
const Spinner = () => {
   
    return(
        <div className="loader text-center">
        <img src={loader} alt="loader" />
    </div>
    );
}

export default Spinner