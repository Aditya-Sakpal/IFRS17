import React from "react";

const FinancialStatements: React.FC = () => {
    return (
        <div style={{ width: "100vw", height: "90vh" }}>
            <iframe
                src="https://ttlwebassets.tatatechnologies.com/app/uploads/2024/05/Tata-Technologies-Earnings-Call-Transcript-Q4FY24.pdf"
                title="Financial Statements PDF"
                style={{ width: "100%", height: "100%", border: "none" }}
            ></iframe>
        </div>
    );
};

export default FinancialStatements;
