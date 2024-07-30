import Navbar from "../components/Navbar"
import Blog from "../components/Blog"
import 'animate.css';



const LandingPage = () => {
  return (
    <div className="max-container">
        <section>
            <Navbar />
        </section>
        <hr className="mt-20"/>
        <div className="flex flex-col ">
              <h1 className="text-[300px] font-medium animate__animated animate__fadeInDown">Daily Dive</h1>
              <div className="flex flex-col gap-10 animate__animated animate__fadeInLeft animate__delay-1s">
              <p className="w-4/6 text-2xl text-justify ">Welcome to Daily Dive, your go-to destination for insightful, engaging, and inspiring content. Our blog is designed to bring you the latest trends, tips, and stories from various fields, including travel, lifestyle, technology, health, and more. Whether you're looking for expert advice, a daily dose of motivation, or simply a place to unwind and explore new ideas, Daily Dive offers a diverse range of articles to keep you informed and entertained. Join our community of curious minds and dive deep into the topics that matter most to you.

              </p>
              <a href="/">
                <p className="text-4xl hover-line">Explore</p>
              </a>
              </div>
        </div>
    </div>
  )
}

export default LandingPage