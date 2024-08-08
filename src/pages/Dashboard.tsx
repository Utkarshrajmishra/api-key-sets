import './Dashboard.css';
import Button from '../components/Button/Button';
const Dashboard =()=>{

    const handleClick =()=> console.log("Button Clicked")
    return(
      <main>
        <section>
            <div>
                <p>My Keys</p>
                <div className="divider"></div>
            </div>
            <div>
                <Button onClick={handleClick} message='Add New Keys' vairant='primary'/>
            </div>
        </section>
      </main>
    )
}

export default Dashboard;