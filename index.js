const Spa = () => {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users: [{name:'Sam', email:'sam@mit.edu', password:'password', balance: 100}]}}>      
        <Route path="/" exact component={Home} />
        <Route path="/CreateAccount/" component={CreateAccount} />
        <Route path="/Login/" component={Login} />
        <Route path="/Deposit/" component={Deposit} />
        <Route path="/Withdraw/" component={Withdraw} />
        <Route path="/Alldata/" component={AllData} />
      </UserContext.Provider>  
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);