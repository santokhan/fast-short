import React from 'react';

const TableContainer = ({ children }) => {
    return (
        <div className="overflow-x-auto bg-white rounded-lg p-4 mt-4">
            <table className="w-full">
                {children}
            </table>
        </div>
    );
}

export default TableContainer;