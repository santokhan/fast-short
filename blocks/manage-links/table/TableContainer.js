import React from 'react';

const TableContainer = ({ children }) => {
    return (
        <div>
            <h2 className="text-2xl font-semibold">Manage Links</h2>
            <div className="overflow-x-auto bg-white rounded-lg p-4 mt-4">
                <table className="w-full">
                    {children}
                </table>
            </div>
        </div>
    );
}

export default TableContainer;