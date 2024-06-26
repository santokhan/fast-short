import post from "./post.js"
import get from "./get.js"
import patch from "./patch.js"
import del from "./delete.js"

const RouterHash = { get, post, patch, delete: del }

export default RouterHash