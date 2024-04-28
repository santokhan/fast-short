'use server'

import { redirect } from "next/navigation";
import checkAlias from "./query/checkAlias";
import createURL from "./query/createURL";
import shortenUrlToId from "@/lib/shorter/shortid";
import { revalidatePath } from "next/cache";

function returnError() {
    const params = new URLSearchParams();
    params.append('error', 'true')
    params.append('alias', 'Alias already exists')

    revalidatePath('/')

    redirect(`/?${params.toString()}`)
}

export async function onSubmitShortForm(payload) {
    const input = {
        url: payload.get('url'),
        domain: payload.get('domain'),
        alias: payload.get('alias') || '',
        author: payload.get('author') || '',
    }

    if (input.url && input.domain) {
        if (input.alias) {
            const result = await checkAlias(input.domain, input.alias);
            if (result) {
                return returnError();
            } else {
                input.hash = input.alias;
            }
        }
        if (!input.hash) {
            input.hash = shortenUrlToId(input.url);
        }

        await createURL(input);

        redirect(`/generating/${input.hash}`);
    }
}
