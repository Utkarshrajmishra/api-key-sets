import './Dashboard.css';
import Button from '../components/Button/Button';
import Card from '../components/Card/Card';

const Dashboard =()=>{

    const handleClick =()=> console.log("Button Clicked")
    return(
      <main>
        <section className='main-container'>
            <div>
                <p className='dashboard-heading'>My Keys</p>
                <div className="divider"></div>
            </div>
            <div className='bottom-container'>
                <Button onClick={handleClick} message='Add New Keys' vairant='primary'/>
            
                <Card/>
            </div>
        </section>
      </main>
    )
}

export default Dashboard;