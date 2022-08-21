
import { IconButton } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

export default function Home() {
  return (
    <div className="shadow-md h-12 flex items-center px-4 justify-between align-center">
    <h1 className="text-purple-500 font-base">Hello World!!</h1>
    <div>
    <IconButton><MenuIcon /></IconButton>
    </div>
    </div>
  )
}
