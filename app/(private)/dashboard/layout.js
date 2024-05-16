const DashboardLayout = ({ children }) => {
    return (
        <main className="min-h-screen">
            <div className="h-16"></div>
            {children}
        </main>
    )
};

export default DashboardLayout