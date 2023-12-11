import Container from "./Container"
import Logo from "./Logo";
import { BsYoutube } from "react-icons/bs";




const Footer = () => {
  return (
    <div className="w-full bg-darkText text-slate-100">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="flex flex-col gap-y-4">
                <Logo/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti impedit deleniti sapiente molestias est voluptatem. Itaque nesciunt odio ut sit?
                </p>
                <div>
                    <span className="bg-slate-100 text-darkText p-1 inline-flex items-center justify-center rounded-md text-lg hover:bg-orange-600 cursor-pointer duration-200">
                        <BsYoutube/>
                    </span>
                </div>
            </div>

        </Container>
    </div>
  )
}

export default Footer