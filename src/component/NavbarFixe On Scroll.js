
// Functional Component

const [navBg, setNavBg] = useState("header_bg")

const whileScroll = () => {
    window.scrollY > 10
      ? setNavBg("header_bg")
      : setNavBg("header_bg")
  }

useEffect(() => {
  window.addEventListener("scroll", whileScroll)
})