import { Nav, HomeBody } from "../components";








const Home = () => {


    return (
        <>
            <Nav navProps /> 
            <main className="absolute top-0 w-full">
              {/* <div> */}
                <HomeBody />
              {/* </div> */}
            </main>
        </>
    );

  
};

export default Home;
