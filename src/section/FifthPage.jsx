import { BlogPosts } from "../constants"

const FifthPage = () => {
  return (
    <div className="h-screen max-container flex justify-center">
      <ul className="grid grid-cols-3 w-9/12 ">
          {BlogPosts.map((item) => (
            <li key={item.label} className=" w-9/12 hover:w-10/12 transition-all hover:500">
              <a href="">
              <div className="flex flex-col gap-4">
                <img src={item.src} alt="blog-image" />
                <div className="flex flex-col gap-2">
                  <p className="text-gray-400 text-lg">{item.date}</p>
                  <h3 className="text-xl font-bold">{item.heading}</h3>
                  <p>{item.content}</p>
                </div>
              </div>
              </a>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default FifthPage