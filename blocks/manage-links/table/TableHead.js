import React from 'react';

const TableHeader = () => {
    const TH = ({ children, ...rest }) => <th className="capitalize text-start px-4" {...rest}>{children}</th>

    return (
        <thead>
            <tr>
                <TH width={460}>URL</TH>
                <TH width={280}>domain + (hash | alias)</TH>
                <TH width={160}>Action</TH>
            </tr>
        </thead>
    );
};

export default TableHeader;