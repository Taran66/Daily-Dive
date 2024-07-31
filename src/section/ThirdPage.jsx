import { BlogPosts } from "../constants"

const ThirdPage = () => {
  return (
    <div className="h-screen flex items-center max-container">
          <ul className="grid grid-cols-4 gap-10 ">
            {BlogPosts.map((item)=>(
                <a href="">
                    <li className="bg-white-alpha p-4 rounded-xl shadow-lg backdrop-blur-lg border border-white border-opacity-30" key={item.label}>
                    <img src={item.src} alt="blog-image" className="w-full h-48 object-cover rounded"/>
                    <p className="text-white">{item.date}</p>
                    <h3 className="text-xl font-bold mt-2">{item.heading}</h3>
                    <p className="mt-2 text-white">{item.content}</p>
                </li>
                </a>
            ))}
        </ul>
    </div>
  )
}

export default ThirdPage