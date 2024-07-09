import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer id="footer" className="max-container">
      <div className="flex flex-wrap justify-between items-start max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img 
              src={footerLogo}
              width={150}
              height={46}
            />
          </a>
          <p className="font-montserrat leading-7 text-base text-white-400 sm:max-w-sm mt-6">
              Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
              {
                socialMedia.map((icon) => (
                  <div className="flex justify-center items-center rounded-full bg-white p-2">
                    <img 
                      src={icon.src}
                      alt={icon.alt}
                      width={24}
                      height={24}
                    />
                  </div>
                ))
              }
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-10 flex-wrap">
          {
            footerLinks.map((section) => (
              <div key={section}>
                <h4 className="text-white-400">{section.title}</h4>
                <ul className="">
                  {
                    section.links.map((link) => (
                      <li className="text-base leading-normal text-white mt-3 text-slate-gray">
                        <a href="/">{link.name}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
        
      </div>
      <div className="flex justify-start items-center gap-8 text-white-400 mt-8 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img 
            src={copyrightSign}
            alt="copy right sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat text-white cursor-pointer">
Terms & Conditions</p>
      </div>
    </footer>
  )
}  

export default Footer