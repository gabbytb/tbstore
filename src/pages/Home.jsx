import { Nav, HomeBody } from "../components";



const Home = () => {
  return (
    <>
        <Nav /> 
        <main className="absolute top-0">
          {/* <div> */}
            <HomeBody />
          {/* </div> */}
        </main>
    </>
  )
}

export default Home
