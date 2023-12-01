import './App.css'
import profile from "./image/a.png";
import email from "./image/email.jpg";
import pass from "./image/pass.png";

function App() {
 

  return (
    <>
       <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Página de Login</h1>
           <div>
             <img src={email} alt="email" className="email"/>
             <input type="text" placeholder="E-mail" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="Senha" className="name"/>
           </div>
          <div className="login-button">
        <button>Login</button>
          </div>
           
            <p className="link">
              <a href="#">Esqueceu a senha?</a> Ou <a href="#"> Cadastre-se</a>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
    </>
  )
}

export default App
