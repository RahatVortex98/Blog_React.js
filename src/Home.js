
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {blogs,isPending,error} = useFetch('http://localhost:8000/blogs')


    // const[name,setName]=useState('mario');

    // const handleClick= () =>{
    //     setName('Lungi');
        
    // }
    // const handleClickAgain= (name) =>{
    //     console.log('hello '+ name);
    // }
  

    
    return ( 
        <div className="home">
           {isPending && <div>Loading...</div> }
           {error && <div>error</div>}
           {blogs && <BlogList blogs={blogs} title="All Blogs" />}
           {/* <BlogList blogs={blogs.filter((blog)=> blog.author==='kajama')} title="Kajama's Blog"/> */}




            {/* <h2>Welcome To Vortex-Blog</h2> */}
            {/* <p>{name}</p>
            <button onClick={handleClick}>Click Me</button> */}
            {/* <button onClick={() => handleClickAgain('mario')}>Click Me</button> */}
        </div>
     );
}
 
export default Home;