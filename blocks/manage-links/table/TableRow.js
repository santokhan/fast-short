import React from 'react';
import Link from 'next/link';
import editURL from '@/actions/query/url/edit';

const TableRow = ({ URL, redirectURL, id, onDelete, refetch }) => {
    const [isEditing, setIsEditing] = React.useState(false);
    const [newURL, setNewURL] = React.useState(URL);

    const onEdit = (value) => {
        setNewURL(value);
    }

    const onCancel = () => {
        setIsEditing(false);
    }

    const onSave = (e) => {
        e.preventDefault();

        if (newURL) {
            // api call
            editURL({ id, URL: newURL }).then((res) => {
                if (res) {
                    console.log(res)
                }
                setIsEditing(false);
                refetch()
            }).catch((error) => {
                console.error(error)
            })
        }
    }

    return (
        <tr>
            <td className="px-4 py-2 whitespace-nowrap overflow-hidden" width={375}>
                {isEditing ? (
                    <form onSubmit={onSave} className='flex gap-2'>
                        <input
                            type="text"
                            defaultValue={URL}
                            onChange={(event) => onEdit(event.target.value)}
                            className='py-1.5 px-3 border flex-grow rounded-lg'
                        />
                        <button type='submit' className="hover:underline">Save</button>
                        <button type='button' onClick={onCancel} className="hover:underline">Cancel</button>
                    </form>
                ) : (
                    <Link href={URL} target="_blank" className="hover:underline">{URL.slice(0, 50)}</Link>
                )}
            </td>
            <td className="px-4 py-2">
                <Link href={redirectURL} target="_blank" className="hover:underline">{redirectURL}</Link>
            </td>
            <td className="px-4 py-2 flex gap-4">
                {isEditing ? (
                    <></>
                ) : (
                    <button type='button' onClick={() => setIsEditing(true)} className="hover:underline">Edit</button>
                )}
                <button type='button' onClick={onDelete} className="hover:underline">Delete</button>
            </td>
        </tr>
    );
};

export default TableRow;