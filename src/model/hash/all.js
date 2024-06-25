import get from "./get.js";
import post from "./post.js";
import patch from "./patch.js";
import del from "./delete.js";

const hash = { get, post, patch, delete: del };

export default hash