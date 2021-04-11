import React from "react";

const SignInView = ({onClick}) => (
  <div>
    <form className="form-signin">
          <img className="mb-4" src="Images/singin-image.jpeg" alt="sign-in" width="150" height="150" />
          <h1 className="h3 mb-3 font-weight-normal">We'd 🤍 to connect </h1>
          <input type="text" className="form-control top" placeholder="First Name" name="firstName" required autofocus />
          <input type="text" className="form-control middle" placeholder="Last Name" name="lastName" required />
          <input type="email" className="form-control bottom" placeholder="Email address" name="email" required />
          <input type="email" className="form-control bottom" placeholder="Your Message" name="email" required />
          <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={() => onClick("SuccessView")}>Send</button>
      <p className="mt-5 mb-3 text-muted">&copy; Jaldeep Patel 2021</p>
    </form>
  </div>
);

const SuccessView = ({onClick}) => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
        <h1 className="display-4">Awesome!</h1>
        <p className="lead">You have been successfully signed up to the Newsletter, look forward to lots of awesome content!!</p>    
        <button className="btn btn-lg btn-success" type="submit" onClick={() => onClick("SignInView")}>Go Back and Sign up with another ID</button>
    </div>
  </div>
);



const FormData = () => {
  
  const [currentView, setCurrentView] = React.useState("SignInView");
  
  return (
      <div>
        {
          currentView === "SignInView" ? 
          <SignInView onClick={page => setCurrentView(page)} /> : 
          <SuccessView onClick={page => setCurrentView(page)} />
       }
      </div>
  );
};

export default FormData;