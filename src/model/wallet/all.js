import post from './post.js'
import PUT from './put.js'
import get from './get.js'
import patch from './patch.js'
import del from './delete.js'

const ModelWallet = {
    get,
    put: PUT,
    post,
    patch,
    delete: del
}

export default ModelWallet