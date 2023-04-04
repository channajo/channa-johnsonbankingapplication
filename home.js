function Home(){
    return (
          <Card

             bgcolor="warning"
             txtcolor="black"
             header="BadBank Main Page"
             title="Welcome to the Bad bank"
             text="Everyone is welcome here, use at your own risk!"
             body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
             
             />

    );
}