import getURL from "@/actions/query/getURL"

// Building API: http://localhost:3000/api/get-url?hash=2Yze1mFA

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const hash = searchParams.get('hash')

    const url = await getURL(hash)

    if (url) {
        return Response.json(url)
    } else {
        return Response.json({
            error: 'URL not found',
            status: 404
        })
    }
}