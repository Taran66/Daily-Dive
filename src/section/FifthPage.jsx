import { BlogPosts } from "../constants"

const FifthPage = () => {
  return (
    <div className="max-container2 flex mt-40">
      <ul className="flex flex-col gap-10">
          {BlogPosts.map((item) => (
            <li key={item.label} className="">
              <a href="">
              <div className="flex gap-10">
                <div className="flex flex-col gap-2">
                  <p className="text-gray-400 text-lg">{item.date}</p>
                  <h3 className="text-3xl font-bold">{item.heading}</h3>
                  <p>{item.content}</p>
                </div>
                <img src={item.src} alt="blog-image" className="w-72" />
              </div>
              </a>
              <img src="" alt="" />
            </li>
          ))}
        </ul>
        <div>
            
        </div>       
    </div>
    
  )
}

export default FifthPage
