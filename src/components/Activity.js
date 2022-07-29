import Card from 'react-bootstrap/Card';

export default function Acitivity() {
    return (
      <div className="container rounded shadow">
        <br /><br />
      <div className="row justify-content-md-center">
         <div className="col-sm-6 md=auto">        
          <p style={{ maxWidth: '25rem' }} >  
          “Yoga is not a work-out it is a work-in, and this is the point of spiritual practice to make us teachable to open up our hearts and focus our awareness so that we can know what we already know and be who we already are.”
         </p>   
        </div>
        <div className="col-sm-6">
         <Card style={{ maxWidth: '15rem' }}>
         <Card.Img className="shadow rounded" variant="top" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1520&q=80"  alt="Activity logo 1"/>
       
         </Card> 
       </div>  
      </div>
       <br/><br/>    
      <div className="row">
        <div className="col-sm-6">
         <Card style={{ maxWidth: '15rem' }}>
         <Card.Img className="shadow rounded" variant="top" src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"  alt="Activity logo 2"/>
         
         </Card> 
       </div>  

       <div className="col-sm-6">
          <p style={{ maxWidth: '25rem' }}> 
          <br/> 
          “Some mountains only require a good pair of shoes. Others require an entire team to conquer. Knowing which is which, is the key to success.”– We Dream of Travel
         </p>   
        </div>
      </div>
<br/><br/>
      <div className="row">
         <div className="col-sm-6">
          <p style={{ maxWidth: '25rem' }} >  
          <br/>
          “Believe in yourself, not only in swimming but in life itself. You always have to have fun. You have to have an open mind. If you’re not enjoying it, don’t do it. Life’s too short.” – Debbie Meyer
         </p>   
        </div>
        <div className="col-sm-6">
         <Card style={{ maxWidth: '15rem' }}>
         <Card.Img className="shadow rounded" variant="top" src="https://images.unsplash.com/photo-1578253734010-32bb761af7e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80"  alt="Activity logo 1"/>
        
         </Card> 
       </div>  
      </div>

<br/><br/>
      <div className="row">
        <div className="col-sm-6">
         <Card style={{ maxWidth: '15rem' }}>
         <Card.Img className="shadow rounded" variant="rounded" src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"  alt="Activity logo 2"/>
        
         </Card> 
       </div>  

       <div className="col-sm-6 " >
          <p style={{ maxWidth: '25rem' }}> 
          <br/> 
          “Life is like riding a bicycle. In order to keep your balance, you must keep moving.” — Albert Einstein, genius         </p>   
        </div>
      </div>
      <br /><br />
    </div>
    
  )
}