const Print = ({ d = {} }) => (<pre>{JSON.stringify(d, null, 2)}</pre>)

export default Print