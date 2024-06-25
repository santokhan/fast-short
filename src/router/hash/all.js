import del from "./delete.js"
import get from "./get.js"
import patch from "./patch.js"
import post from "./post.js"

const RouterHash = { get, post, patch, delete: del }

export default RouterHash