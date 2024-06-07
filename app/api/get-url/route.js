export const dynamic = 'force-dynamic' // defaults to auto
import getURL from "@/actions/query/getURL"

// Building API: http://localhost:3000/api/get-url?hash=2Yze1mFA
export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const hash = searchParams.get('hash')

    const urlObject = await getURL(hash)

    if (urlObject) {
        const { URL } = urlObject
        const res = { url: URL }; // {res: { url: 'https://example.com' }}

        return new Response(JSON.stringify(res), {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                'Content-Type': 'application/json' // Set Content-Type header for JSON response
            }
        });
        // return Response.json(res)
    } else {
        return Response.json({
            error: 'URL not found',
            status: 404
        })
    }
}